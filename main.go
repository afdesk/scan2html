package main

import (
	"bytes"
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
	availableFlags   = []string{"--html-result", "--load-result"}
)

func main() {
	if slices.Contains(os.Args, "-h") || slices.Contains(os.Args, "--help") || len(os.Args) <= 1 {
		helpMessage()
	}
	trivyCommand, pluginFlags := splitPluginArguments()
	jsonResultFile := pluginFlags["--load-result"]
	if jsonResultFile == "" {
		jsonResultFile = filepath.Join(os.TempDir(), tempJsonFileName)
		err := makeTrivyJsonReport(jsonResultFile, trivyCommand)
		if err != nil {
			log.Fatalf("failed to build report: %v", err)
		}
		defer func(file string) {
			if err := os.Remove(file); err != nil {
				log.Printf("failed to remove file %v", err)
			}
		}(jsonResultFile)
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

func makeTrivyJsonReport(outputFileName string, trivyCommand []string) error {
	cmdArgs := append(trivyCommand, "--format", "json", "--output", outputFileName)
	cmd := exec.Command("trivy", cmdArgs...)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return err
	}
	return nil
}

func splitPluginArguments() ([]string, map[string]string) {
	trivyCommand := make([]string, 0, len(os.Args))
	excludeMap := make(map[int]bool)
	pluginFlags := make(map[string]string)
	for i := 0; i < len(os.Args); i++ {
		flagIndex := slices.Index(availableFlags, os.Args[i])
		if flagIndex != -1 && len(os.Args)-1 > flagIndex {
			pluginFlags[os.Args[i]] = os.Args[i+1]
			excludeMap[i] = true
			excludeMap[i+1] = true
		}
	}
	for i, arg := range os.Args {
		if !excludeMap[i] {
			trivyCommand = append(trivyCommand, arg)
		}
	}
	return trivyCommand[1:], pluginFlags
}

func readPluginFile(fileName string) ([]byte, error) {
	ex, err := os.Executable()
	if err != nil {
		return nil, err
	}
	return os.ReadFile(filepath.Join(filepath.Dir(ex), fileName))
}
