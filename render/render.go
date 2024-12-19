package render

import (
	_ "embed"
	"encoding/json"
	"os"
	"text/template"

	k8s "github.com/aquasecurity/trivy/pkg/k8s/report"
	"github.com/aquasecurity/trivy/pkg/types"
	"golang.org/x/xerrors"
)

//go:embed template/html.tpl
var htmlTmpl []byte

func Render(fileName string, inputData []byte) error {
	var kubernetes k8s.Report
	var report types.Report

	if err := json.Unmarshal(inputData, &kubernetes); err != nil {
		return xerrors.Errorf("error decoding body: %v\n", err)
	}

	if err := json.Unmarshal(inputData, &report); err != nil {
		return xerrors.Errorf("error decoding body: %v\n", err)
	}

	results := report.Results
	for _, resource := range kubernetes.Resources {
		results = append(results, resource.Results...)
	}

	tmpl, err := template.New("temp").Funcs(template.FuncMap{
		"toJSON": func(v interface{}) (string, error) {
			bytes, err := json.Marshal(v)
			return string(bytes), err
		},
	}).Parse(string(htmlTmpl))

	if err != nil {
		return xerrors.Errorf("error parsing template: %v\n", err)
	}

	output, err := os.Create(fileName)
	if err != nil {
		return xerrors.Errorf("error creating file: %v\n", err)
	}
	defer output.Close()

	if err = tmpl.Execute(output, results); err != nil {
		return xerrors.Errorf("error executing template: %v\n", err)
	}

	return nil
}
