# scan2html
A Trivy plugin that scans and outputs the results to a html file.

```
$ trivy scan2html image alpine:3.14.1 result.html
```
![image](https://user-images.githubusercontent.com/19297627/224302593-6873913c-d829-4769-84b6-643d00607a4a.png)

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

## Uninstall
```sh
  trivy plugin uninstall scan2html
```

