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

## Build

```
  yarn
  yarn build
```

## Release
To release, change the version in plugin.yml and push the changes
When released, all the words "\_\_VERSION__" in all files except .md will be replaced with the release version from plugin.yaml
