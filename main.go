package main

import (
	"fmt"
	"golang.org/x/exp/slices"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

var (
	tempJsonFileName = "scan2html-report-temp.json"
	version          = "dev"
)

func main() {
	helpMessage()
	trivyCommand := os.Args[1 : len(os.Args)-1]
	outputFileName := os.Args[len(os.Args)-1]

	tempFileName := filepath.Join(os.TempDir(), tempJsonFileName)
	defer removeFile(tempFileName)
	cmdArgs := append(trivyCommand, "--format", "json", "--output", tempFileName)
	cmd := exec.Command("trivy", cmdArgs...)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		log.Fatalf("failed to build report: %v", err)
	}

	firstHTMLName := getPluginFileName("first.html")
	firstHTML, err := os.ReadFile(firstHTMLName)
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	reportJson, err := os.ReadFile(tempFileName)
	if err != nil {
		log.Fatalf("failed to read json file: %v", err)
	}

	secondHTMLName := getPluginFileName("second.html")
	secondHTML, err := os.ReadFile(secondHTMLName)
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	createdAt := time.Now().Unix()
	argsStr := strings.Join(os.Args[1:len(os.Args)-1], " ")
	output := []byte(fmt.Sprintf("const trivyData = %s;\nconst createdAt = %d;\nconst args = \"%s\";\n%s",
		reportJson, createdAt, argsStr, secondHTML))

	err = os.WriteFile(outputFileName, append(firstHTML, output...), 0666)
	if err != nil {
		log.Fatalf("failed to write output file: %v", err)
	}
}

func removeFile(file string) {
	if err := os.Remove(file); err != nil {
		log.Fatalf("failed to remove file %v", err)
	}
}

func getPluginFileName(fileName string) string {
	ex, err := os.Executable()
	if err != nil {
		log.Fatalf("Failed to get plugin file %v", err)
	}
	return filepath.Join(filepath.Dir(ex), fileName)
}

func helpMessage() {
	if slices.Contains(os.Args, "-h") || slices.Contains(os.Args, "--help") {
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
}
