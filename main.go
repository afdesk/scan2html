package main

import (
	"io"
	"log"
	"os"

	"github.com/spf13/cobra"
	"golang.org/x/xerrors"

	"github.com/afdesk/scan2html/render"
)

func main() {
	rootCmd, err := initRootCmd()
	if err != nil {
		log.Fatalf("error initialising root cmd %+v", err)
	}

	if err = rootCmd.Execute(); err != nil {
		log.Fatalf("executing error %+v", err)
	}
}

func initRootCmd() (*cobra.Command, error) {
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
	rootCmd.PersistentFlags().StringVar(&fileName, "output", "trivy-report.html", "file to save html report")
	return rootCmd, nil
}

func runPlugin(fileName string) error {
	inputData, err := io.ReadAll(os.Stdin)
	if err != nil {
		return xerrors.Errorf("error reading trivy output: %w", err)
	}
	err = render.Render(fileName, inputData)
	if err != nil {
		return xerrors.Errorf("error rendering trivy output: %w", err)
	}

	return nil
}
