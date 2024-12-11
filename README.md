# trivy-html
A Trivy plugin that scans and outputs the results to a html file.

```sh
$ trivy image alpine:3.14.1 -f json --output plugin=trivy-html --output-plugin-arg "--output=result.html"
```
![image](https://user-images.githubusercontent.com/19297627/224302593-6873913c-d829-4769-84b6-643d00607a4a.png)
![image](https://user-images.githubusercontent.com/19297627/225588665-7b9dc56b-3326-4535-90f3-1dd81e389e5c.png)

### `trivy-html` supports `--list-all-pkgs`
```sh
$ trivy image alpine:3.14.1 -f json --list-all-pkgs --output plugin=trivy-html --output-plugin-arg "--output=result.html"
```
![image](https://user-images.githubusercontent.com/19297627/226530343-100e3064-0b0a-4860-a439-b6dfd97ac7c3.png)
![image](https://user-images.githubusercontent.com/19297627/226530361-65acc67e-64c0-45f4-b514-31c514284c2f.png)

## Install
```sh
$ trivy plugin install github.com/afdesk/trivy-html

$ trivy trivy-html -h

A Trivy plugin that scans and outputs the results to a html file.

Usage:
  trivy-html [flags]

Flags:
  -h, --help            help for trivy-html
      --output string   file to save html report (default "trivy-report.html")
```

## Uninstall
```sh
  trivy plugin uninstall trivy-html
```

