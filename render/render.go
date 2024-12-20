package render

import (
	"embed"
	_ "embed"
	"encoding/json"
	"io/fs"
	"os"
	"strings"
	"text/template"

	k8s "github.com/aquasecurity/trivy/pkg/k8s/report"
	"github.com/aquasecurity/trivy/pkg/types"
	"golang.org/x/xerrors"
)

//go:embed template/html.tpl
var htmlTmpl []byte

//go:embed template/*
var templates embed.FS

var extensions = []string{".tpl", ".js", ".css"}

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

	templateFS, err := fs.Sub(templates, "template")
	if err != nil {
		return xerrors.Errorf("error loading templates: %w", err)
	}

	files, err := collectFiles(templateFS)
	if err != nil {
		return xerrors.Errorf("error collecting files: %w", err)
	}

	tmpl, err := template.New("temp").Funcs(template.FuncMap{
		"toJSON": func(v interface{}) (string, error) {
			bytes, err := json.Marshal(v)
			return string(bytes), err
		},
	}).ParseFS(templateFS, files...)

	if err != nil {
		return xerrors.Errorf("error parsing template: %v\n", err)
	}

	output, err := os.Create(fileName)
	if err != nil {
		return xerrors.Errorf("error creating file: %v\n", err)
	}
	defer output.Close()

	if err = tmpl.ExecuteTemplate(output, "html.tpl", results); err != nil {
		return xerrors.Errorf("error executing template: %v\n", err)
	}

	return nil
}

func collectFiles(templateFS fs.FS) ([]string, error) {
	var files []string
	err := fs.WalkDir(templateFS, ".", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return xerrors.Errorf("error listing files in %s: %w", path, err)
		}

		for _, ext := range extensions {
			if !d.IsDir() && strings.HasSuffix(path, ext) {
				files = append(files, path)
				break
			}
		}
		return nil
	})

	if err != nil {
		return nil, xerrors.Errorf("error listing files: %w", err)
	}

	return files, nil
}
