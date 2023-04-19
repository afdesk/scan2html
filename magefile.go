//go:build mage
// +build mage

package main

import (
	"log"
	"os"
	"os/exec"
)

func Test() {
	cmd := exec.Command("go", "test")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		log.Fatalf("Failer to run tests: %v", err)
	}
}
