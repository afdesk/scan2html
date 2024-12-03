package render

import (
	_ "embed"
	"encoding/json"
	"os"
	"text/template"

	"github.com/aquasecurity/trivy/pkg/types"
	"golang.org/x/xerrors"
)

//go:embed template/html.tpl
var htmlTmpl []byte

func Render(fileName string, inputData []byte) error {
	var report types.Report
	if err := json.Unmarshal(inputData, &report); err != nil {
		return xerrors.Errorf("error decoding body: %v\n", err)
	}

	tmpl, err := template.New("temp").Parse(string(htmlTmpl))
	if err != nil {
		return xerrors.Errorf("error parsing template: %v\n", err)
	}

	output, err := os.Create(fileName)
	if err != nil {
		return xerrors.Errorf("error creating file: %v\n", err)
	}
	defer output.Close()

	if err := tmpl.Execute(output, report); err != nil {
		return xerrors.Errorf("error executing template: %v\n", err)
	}

	return nil
}
