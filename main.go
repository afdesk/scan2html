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
	jsonResultFile := getFlagValue("--load-result")
	if jsonResultFile == "" {
		jsonResultFile = filepath.Join(os.TempDir(), tempJsonFileName)
		defer removeFile(jsonResultFile)
		err := makeTrivyJsonReport(jsonResultFile)
		if err != nil {
			log.Fatalf("failed to build report: %v", err)
		}
	}

	firstHTML, err := readPluginFile("first.html")
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	reportJson, err := os.ReadFile(jsonResultFile)
	if err != nil {
		log.Fatalf("failed to read json file: %v", err)
	}

	secondHTML, err := readPluginFile("second.html")
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	createdAt := time.Now().Unix()
	argsStr := strings.Replace(strings.Join(os.Args[1:len(os.Args)-1], " "), string(filepath.Separator), "/", -1)
	output := []byte(fmt.Sprintf("const trivyData = %s;\nconst createdAt = %d;\nconst args = \"%s\";\n%s",
		reportJson, createdAt, argsStr, secondHTML))

	htmlResultOutput := getFlagValue("--html-result")
	if htmlResultOutput == "" {
		log.Println("--html-result flag is not defined. Set default value result.html")
		htmlResultOutput = "result.html"
	}
	err = os.WriteFile(htmlResultOutput, append(firstHTML, output...), 0600)
	if err != nil {
		log.Fatalf("failed to write output file: %v", err)
	}
}

func removeFile(file string) {
	if err := os.Remove(file); err != nil {
		log.Fatalf("failed to remove file %v", err)
	}
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
  trivy scan2html image alpine:latest --html-result result.html
  # Scan local folder
  trivy scan2html fs . --html-result result.html
`, version)
	if err != nil {
		log.Fatalf("Failed to display help message %v", err)
	}
	os.Exit(0)
}

func makeTrivyJsonReport(outputFileName string) error {
	trivyCommandBorder := getFirstFlagIndex()
	trivyCommand := os.Args[1:trivyCommandBorder]
	cmdArgs := append(trivyCommand, "--format", "json", "--output", outputFileName)
	cmd := exec.Command("trivy", cmdArgs...)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return err
	}
	return nil
}

func getFirstFlagIndex() int {
	availableFlags := []string{"--html-result", "--load-result"}
	for i, v := range os.Args {
		if slices.Contains(availableFlags, v) {
			return i
		}
	}
	return len(os.Args)
}

func getFlagValue(flag string) string {
	flagIndex := slices.Index(os.Args, flag)
	if flagIndex != -1 && (len(os.Args)-1) > flagIndex { // the flag exists and it is not the last argument
		return os.Args[flagIndex+1]
	}
	return ""
}

func readPluginFile(fileName string) ([]byte, error) {
	ex, err := os.Executable()
	if err != nil {
		return nil, err
	}
	return os.ReadFile(filepath.Join(filepath.Dir(ex), fileName))
}
