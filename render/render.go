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

type Data struct {
	Results  types.Results
	JsonData string // For js script into template
}

func Render(fileName string, inputData []byte) error {
	var kubernetes k8s.Report
	var report types.Report

	if err := json.Unmarshal(inputData, &kubernetes); err != nil {
		return xerrors.Errorf("error decoding body: %v\n", err)
	}

	if err := json.Unmarshal(inputData, &report); err != nil {
		return xerrors.Errorf("error decoding body: %v\n", err)
	}
	data := Data{Results: report.Results, JsonData: string(inputData)}

	for _, resource := range kubernetes.Resources {
		data.Results = append(data.Results, resource.Results...)
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

	if err = tmpl.Execute(output, data); err != nil {
		return xerrors.Errorf("error executing template: %v\n", err)
	}

	return nil
}
