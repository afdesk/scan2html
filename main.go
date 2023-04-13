package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"golang.org/x/exp/slices"
)

var (
	tempJsonFileName = "scan2html-report-temp.json"
	version          = "dev"
)

func main() {
	if slices.Contains(os.Args, "-h") || slices.Contains(os.Args, "--help") {
		helpMessage()
	}

	tempFileName := filepath.Join(os.TempDir(), tempJsonFileName)
	defer removeFile(tempFileName)
	if err := makeTrivyJsonReport(tempFileName); err != nil {
		log.Fatalf("failed to make trivy report: %v", err)
	}

	firstHTML, err := readPluginFile("first.html")
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	reportJson, err := os.ReadFile(tempFileName)
	if err != nil {
		log.Fatalf("failed to read json file: %v", err)
	}

	secondHTML, err := readPluginFile("second.html")
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	createdAt := time.Now().Unix()
	argsStr := strings.Join(os.Args[1:len(os.Args)-1], " ")
	output := []byte(fmt.Sprintf("const trivyData = %s;\nconst createdAt = %d;\nconst args = \"%s\";\n%s",
		reportJson, createdAt, argsStr, secondHTML))

	err = os.WriteFile(os.Args[len(os.Args)-1], append(firstHTML, output...), 0600)
	if err != nil {
		log.Fatalf("failed to write output file: %v", err)
	}
}

func removeFile(file string) {
	if err := os.Remove(file); err != nil {
		log.Fatalf("failed to remove file %v", err)
	}
}
func readPluginFile(fileName string) ([]byte, error) {
	ex, err := os.Executable()
	if err != nil {
		return nil, err
	}
	return os.ReadFile(filepath.Join(filepath.Dir(ex), fileName))
}

func helpMessage() {
	_, err := fmt.Printf(`
scan2html v%s
Usage: trivy scan2html [-h,--help] command target filename
 A Trivy plugin that scans and output the results to a html file.
Options:
  -h, --help    Show usage.
Examples:
  # Scan 'alpine:latest' image
  trivy scan2html image alpine:latest result.html
  # Scan local folder
  trivy scan2html fs . result.html
`, version)
	if err != nil {
		log.Fatalf("Failed to display help message %v", err)
	}
	os.Exit(0)
}

func makeTrivyJsonReport(outputFileName string) error {
	trivyCommand := os.Args[1 : len(os.Args)-1]
	cmdArgs := append(trivyCommand, "--format", "json", "--output", outputFileName)
	cmd := exec.Command("trivy", cmdArgs...)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return err
	}
	return nil
}
