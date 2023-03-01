# scan2html
A Trivy plugin that scans and outputs the results to a html file.
## Install
```sh
$ trivy plugin install github.com/afdesk/scan2html

$ trivy scan2html -h

Usage: trivy scan2html [-h,--help] command target filename
 A Trivy plugin that scans and outputs the results to a html file.
Options:
  -h, --help    Show usage.
Examples:
  # Scan  image
  trivy scan2html image alpine:latest result.html

  # Scan local folder
  trivy scan2html fs . result.html
```

