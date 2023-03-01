<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  {{- if . }}
  <link rel="stylesheet" href="./index.css">
  <title>Trivy Report - {{ escapeXML ( index . 0 ).Target }}</title>
  <script src="./index.js"></script>
</head>

<body>
  <h1>Trivy Report - {{ escapeXML ( index . 0 ).Target }} - <span id='title-time' class="initially-disabled">{{ now }}</span></h1>
  <div class="filter_bar">
    <input type="text" placeholder="Search.." title="Search by package, vulnerability id, severity, installed version"
      class="filter_bar__filter_name search">
  </div>
  {{- range . }}
  <div class="header">
    <h3 class="header__title">{{ escapeXML .Type }}</h3>
  </div>
  <table>
    <thead>
      {{- if (eq (len .Vulnerabilities) 0) }}
      <tr>
        <th colspan="6">No Vulnerabilities found</th>
      </tr>
      {{- else }}
      <tr class="sub-header">
        <th data-type="string" data-sortable="true"><span> Package </span> <svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" viewBox="0 0 16 16">
            <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z" />
          </svg></th>
        <th data-type="string" data-sortable="true"><span> Vulnerability ID </span> <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z" />
          </svg></th>
        <th data-type="severity" data-sortable="true"><span> Severity </span> <svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" viewBox="0 0 16 16">
            <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z" />
          </svg></th>
        <th data-type="string" data-sortable="true"><span> Installed Version </span> <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z" />
          </svg></th>
        <th data-type="string" data-sortable="falsee"><span> Fixed Version </span> <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z" />
          </svg></th>
        <th data-type="string" data-sortable="falsee"><span> Links </span> <svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" viewBox="0 0 16 16">
            <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z" />
          </svg></th>
      </tr>
    </thead>
    <tbody data-main="true">
      {{- range .Vulnerabilities }}
      <tr class="severity-{{ escapeXML .Vulnerability.Severity }} filterable">
        <td class="pkg-name">{{ escapeXML .PkgName }}</td>
        <td class="vuln">{{ escapeXML .VulnerabilityID }}</td>
        <td class="severity">{{ escapeXML .Vulnerability.Severity }}</td>
        <td class="pkg-version">{{ escapeXML .InstalledVersion }}</td>
        <td>{{ escapeXML .FixedVersion }}</td>
        <td class="links" data-more-links="off">
          {{- range .Vulnerability.References }}
          <a class="link" href='{{ escapeXML . | printf "%q" }}'>{{ escapeXML . }}</a>
          {{- end }}
        </td>
      </tr>
      {{- end }}
    </tbody>

    {{- end }}
    {{- if (eq (len .Misconfigurations ) 0) }}
    <tr>
      <th colspan="6">No Misconfigurations found</th>
    </tr>
    {{- else }}
    <tr class="sub-header">
      <th>Type</th>
      <th>Misconf ID</th>
      <th>Check</th>
      <th>Severity</th>
      <th>Message</th>
    </tr>
    {{- range .Misconfigurations }}
    <tr class="severity-{{ escapeXML .Severity }}">
      <td class="misconf-type">{{ escapeXML .Type }}</td>
      <td>{{ escapeXML .ID }}</td>
      <td class="misconf-check">{{ escapeXML .Title }}</td>
      <td class="severity">{{ escapeXML .Severity }}</td>
      <td class="link" data-more-links="off" style="white-space:normal;">
        {{ escapeXML .Message }}
        <br>
        <a href='{{ escapeXML .PrimaryURL | printf "%q" }}'>{{ escapeXML .PrimaryURL }}</a>
        </br>
      </td>
    </tr>
    {{- end }}
    {{- end }}

  </table>

  {{- end }}
  </body>


  {{- else }}
  </head>

  <body>
    <h1>Trivy Returned Empty Report</h1>
  </body>
    {{- end }}

</html>