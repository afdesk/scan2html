package main

import (
	"bytes"
	_ "embed"
	"encoding/json"
	"io"
	"log"
	"os"
	"text/template"

	"github.com/aquasecurity/trivy/pkg/types"
	"github.com/spf13/cobra"
	"golang.org/x/xerrors"
)

//go:embed template/html.tpl
var htmlTmpl []byte

func main() {
	rootCmd, err := initFlags()
	if err != nil {
		log.Fatalf("%+v", err)
	}

	if err = rootCmd.Execute(); err != nil {
		log.Fatalf("%+v", err)
	}
}

func initFlags() (*cobra.Command, error) {
	var fileName string
	rootCmd := &cobra.Command{
		Use: "scan2html",
		CompletionOptions: cobra.CompletionOptions{
			DisableDefaultCmd: true,
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			return runPlugin(fileName)
		},
	}
	rootCmd.PersistentFlags().StringVar(&fileName, "file", "trivy-report.html", "file to save html report")
	return rootCmd, nil
}

func runPlugin(fileName string) error {
	inputData, err := io.ReadAll(os.Stdin)
	if err != nil {
		return xerrors.Errorf("error reading trivy output: %v\n", err)
	}

	var output types.Report
	if err := json.NewDecoder(bytes.NewReader(inputData)).Decode(&output); err != nil {
		return xerrors.Errorf("error decoding body: %v\n", err)
	}

	tmpl, err := template.New("temp").Parse(string(htmlTmpl))
	if err != nil {
		return xerrors.Errorf("error parsing template: %v\n", err)
	}

	file, err := os.Create(fileName)
	if err != nil {
		return xerrors.Errorf("error creating file: %v\n", err)
	}
	defer file.Close()

	if err := tmpl.Execute(file, output); err != nil {
		return xerrors.Errorf("error executing template: %v\n", err)
	}
	return nil
}
