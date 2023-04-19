package main

import (
	"github.com/stretchr/testify/assert"
	"log"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"testing"
)

var cwd = ""

func initializeCwd() {
	currentWorkingDirectory, err := os.Getwd()
	if err != nil {
		log.Fatalf("failed to get working directory: %v", err)
	}
	cwd = currentWorkingDirectory
}

func buildHtmlFiles() {
	ex, err := os.Executable()
	if err != nil {
		log.Fatalf("failed to get executable, %v", err)
	}
	cmd := exec.Command("yarn", "build", "--dist", filepath.Dir(ex))
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		log.Fatalf("Failer to build html files: %v", err)
	}
}

func TestMain(m *testing.M) {
	initializeCwd()
	buildHtmlFiles()
	os.Exit(m.Run())
}

func Test_main(t *testing.T) {
	vulnSourcePath := path.Join(cwd, "resources", "vulnSource")
	defer func() { os.Args = []string{} }()
	tests := []struct {
		name         string
		osArgs       []string
		tempFilePath string
	}{{
		name:         "test image",
		osArgs:       []string{"scan2html", "image", "alpine:3.14.1"},
		tempFilePath: path.Join(os.TempDir(), "scan2html_image_test.html"),
	}, {
		name:         "test fs",
		osArgs:       []string{"scan2html", "fs", vulnSourcePath},
		tempFilePath: path.Join(os.TempDir(), "scan2html_fs_test.html"),
	}, {
		name:         "test rootfs",
		osArgs:       []string{"scan2html", "rootfs", vulnSourcePath},
		tempFilePath: path.Join(os.TempDir(), "scan2html_rootfs_test.html"),
	},
	}
	defer func(tests []struct {
		name         string
		osArgs       []string
		tempFilePath string
	}) {
		for _, test := range tests {
			err := os.Remove(test.tempFilePath)
			if err != nil {
				log.Fatalf("failded to delete temp files: %v", err)
			}
		}
	}(tests)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			os.Args = append(tt.osArgs, tt.tempFilePath)
			assert.Nil(t, run())
		})
	}
}
