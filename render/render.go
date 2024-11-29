package render

import (
	"bytes"
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
