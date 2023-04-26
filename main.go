package main

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/afdesk/trivy-go-plugin/pkg/common"
)

var (
	tempJsonFileName = "scan2html-report-temp.json"
	version          = "dev"
	availableFlags   = []string{"--html-result", "--load-result"}
)

func main() {
	if common.IsHelp() || len(os.Args) <= 1 {
		helpMessage()
	}
	pluginFlags, trivyCommand := common.RetrievePluginArguments(availableFlags)
	jsonResultFile := pluginFlags["--load-result"]
	if jsonResultFile == "" {
		jsonResultFile = filepath.Join(os.TempDir(), tempJsonFileName)
		err := common.MakeTrivyJsonReport(trivyCommand, jsonResultFile)
		if err != nil {
			log.Fatalf("failed to build report: %v", err)
		}
		defer func(file string) {
			if err := os.Remove(file); err != nil {
				log.Printf("failed to remove file %v", err)
			}
		}(jsonResultFile)
	}

	firstHTML, err := common.ReadPluginFile("first.html")
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	reportJson, err := os.ReadFile(jsonResultFile)
	if err != nil {
		log.Fatalf("failed to read json file: %v", err)
	}

	secondHTML, err := common.ReadPluginFile("second.html")
	if err != nil {
		log.Fatalf("failed to read html file: %v", err)
	}

	createdAt := time.Now().Unix()
	argsStr := strings.Replace(strings.Join(os.Args[1:], " "), string(filepath.Separator), "/", -1)

	output := bytes.NewBuffer(firstHTML)
	fmt.Fprintf(output, "const trivyData = %s;\nconst createdAt = %d;\nconst args = %q;\n%s", reportJson, createdAt, argsStr, secondHTML)

	htmlResultOutput := pluginFlags["--html-result"]
	if htmlResultOutput == "" {
		log.Println("--html-result flag is not defined. Set default value result.html")
		htmlResultOutput = "result.html"
	}
	err = os.WriteFile(htmlResultOutput, output.Bytes(), 0600)
	if err != nil {
		log.Fatalf("failed to write output file: %v", err)
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
