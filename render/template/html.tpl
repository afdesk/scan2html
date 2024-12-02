<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Trivy Report</title>

    <style>
        * {
            font-family: Arial, Helvetica, sans-serif;
        }

        h1, h2 {
            text-align: center;
        }

        .top-vuln-title, .top-misc-title {
            border-bottom: 1px solid #0000001f;
        }

        .initially-disabled {
            display: none;
        }

        .link {
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            height: 1.2em;
            white-space: nowrap;
        }

        .vuln {
            word-wrap: anywhere;
        }

        .group-header th {
            font-size: 200%;
        }

        table,
        th,
        td {
            border-bottom: 1px solid #0000001f;
            border-collapse: collapse;
            padding: .3em;
            white-space: normal;
        }

        table {
            margin: 0 auto;
            table-layout: fixed;
            width: 100%;
            border: 1px solid #ddd;
        }

        .severity {
            font-weight: bold;
        }


        table tr td:first-of-type {
            font-weight: bold;
        }

        .links a,
        .links[data-more-links=on] a {
            display: block;
        }

        .links[data-more-links=off] a:nth-of-type(1n+2) {
            display: none;
        }

        a.toggle-more-links {
            cursor: pointer;
        }

        th[data-sortable="true"] {
            cursor: pointer;
        }

        .sub-header th {
            font-size: 150%;
            text-align: center;
            background-color: #ddd;
        }

        th svg {
            visibility: hidden;
            pointer-events: none;
        }

        th span {
            pointer-events: none;
        }

        .sub-header th[data-sortable="true"] svg {
            visibility: visible;
        }

        ul {
            list-style-type: none;
        }

        .search {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23bdbdbd' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E");
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 100%;
            font-size: 16px;
            padding: 12px 20px 12px 40px;
            border: 1px solid #ddd;
        }

        .search:focus {
            outline: none;
            border-color: #07f;
            box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
        }

        .filter_bar {
            display: flex;
            align-items: center;
        }

        .filterable:hover {
            background-color: #f1f1f1;
        }

        .pkg-name {
            width: 100%;
            height: 1.2em;
        }

        .ta-center {
            text-align: center;
        }

        .break-word {
            word-wrap: break-word;
        }

        .header__title {
            font-size: 24px;
        }

        .secret__line {
            display: flex;
        }

        .secret__code {
            background-color: #f1f1f1;
            border: #e1e1e1;
            border-radius: 5px;
            padding: 10px 0 10px 15px;
        }

        .secret__line pre {
            margin: 0;
            overflow-wrap: anywhere;
            white-space: pre-line;
        }

        .secret__line-cause {
            color: #e40000;
        }

        .secret__line-number {
            border-right: 1px solid black;
            margin-right: 10px;
            padding-right: 10px;
        }

        .secret__src-file {
            color: #1f6feb
        }

        .secret__src-lines {
            color: #1f6feb
        }

        .severity-LOW {
            color: #5fbb31;
        }

        .severity-MEDIUM {
            color: #e9c600;
        }

        .severity-HIGH {
            color: #ff8800;
        }

        .severity-CRITICAL {
            color: #e40000;
        }

        .severity-UNKNOWN {
            color: #747474;
        }

        .secret__severity {
            font-weight: bold;
        }

        .secret-results__title {
            margin-bottom: 0;
            font-size: 24px;
        }

        .secret__head {
            margin-left: 15px;
        }

        .secret__title {
            margin-left: 15px;
        }

        .secret__src {
            margin-left: 15px;
        }

        .secret + .secret {
            margin-top: 10px;
        }

        ul {
            list-style: none;
        }

        .hidden {
            display: none;
        }

        .tree {
            --spacing: 1.5rem;
            --radius: 10px;
            font-size: 20px;
            margin-top: 10px;
        }

        .tree li {
            display: block;
            position: relative;
            padding-left: calc(2 * var(--spacing) - var(--radius) - 2px);
        }

        .tree ul {
            margin-left: calc(var(--radius) - var(--spacing));
            padding-left: 0;
        }

        .tree ul li {
            border-left: 2px solid #ddd;
        }

        .tree ul li:last-child {
            border-color: transparent;
        }

        .tree ul li::before {
            content: '';
            display: block;
            position: absolute;
            top: calc(var(--spacing) / -2);
            left: -2px;
            width: calc(var(--spacing) + 8px);
            height: calc(var(--spacing) + -1px);
            border: solid #ddd;
            border-width: 0 0 2px 2px;
        }

        .tree .dependency-tree-node__title {
            display: block;
        }

        .tree .dependency-tree-node__title::marker,
        .tree .dependency-tree-node__title::-webkit-details-marker {
            display: none;
        }

        .tree .dependency-tree-node__title:focus {
            outline: none;
        }

        .tree .dependency-tree-node__title:focus-visible {
            outline: 1px dotted #000;
        }

        .dependency-tree-node__dots {
            font-size: 22px;
            border: 1px solid #e1e1e1;
            background: #e0e0e0;
            display: inline-block;
            width: 22px;
            height: 22px;
            text-align: center;
            border-radius: 5px;
            line-height: 11px;
            cursor: pointer;

            position: relative;
            z-index: 2;
        }

        .tree > li > ul.dependency-tree-node__children.original > li > span {
            color: #e40000;
        }

        .dependency-tree__title {
            margin-bottom: 0;
        }

        .dependency-tree__description {
            font-size: 24px;
        }
    </style>

        <script>
            document.addEventListener("DOMContentLoaded", function () {
            const now = new Date();
            const currentTime = now.toLocaleTimeString();
            const currentDate = now.toLocaleDateString();
            document.getElementById("current-time").textContent += `${currentDate} ${currentTime}`;
            });
        </script>

        <script>
        function insertAfter(referenceNode, newNode) {
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }

        const severityOrder = {
          UNKNOWN: { order: 5 },
          LOW: { order: 4 },
          MEDIUM: { order: 3 },
          HIGH: { order: 2 },
          CRITICAL: { order: 1 },
        };

        function attachLinksInteractivity() {
          document.querySelectorAll("td.links").forEach(function (linkCell) {
            const links = [].concat.apply([], linkCell.querySelectorAll("a"));
            [].sort.apply(links, function (a, b) {
              return a.href > b.href ? 1 : -1;
            });
            links.forEach(function (link, idx) {
              if (links.length > 0 && 0 === idx) {
                const toggleLink = document.createElement("a");
                toggleLink.innerText = "Toggle more links";
                toggleLink.href = "#toggleMore";
                toggleLink.setAttribute("class", "toggle-more-links");
                linkCell.appendChild(toggleLink);
              }
              linkCell.appendChild(link);
            });
          });

          document
              .querySelectorAll("a.toggle-more-links")
              .forEach(function (toggleLink) {
                toggleLink.onclick = function () {
                  const expanded =
                      toggleLink.parentElement.getAttribute("data-more-links");
                  toggleLink.parentElement.setAttribute(
                      "data-more-links",
                      "on" === expanded ? "off" : "on"
                  );
                  return false;
                };
              });
        }

        function attachFilterInteractivity() {
          const filterBar = document.querySelector(".filter_bar");
          const nameFilter = filterBar.querySelector(".filter_bar__filter_name");
          const filterable = document.querySelectorAll(".filterable");
          const cellClasses = [
            ".pkg-name",
            ".vuln",
            ".misc-type",
            ".misc-id",
            ".severity",
            ".pkg-version",
            ".pkg-key-name",
            ".pkg-key-version",
            ".pkg-key-src-name",
            ".pkg-key-src-version",
          ];

          function applyFilters(filterValue) {
            filterable.forEach((f) => {
              const cellValues = cellClasses
                  .map((cl) => f.querySelector(cl))
                  .filter((cell) => cell !== null)
                  .map((cell) => cell.textContent || cell.innerText);

              const condition = cellValues.some((cellValue) =>
                  cellValue.toUpperCase().includes(filterValue.toUpperCase())
              );

              f.style.display = condition ? "" : "none";
            });
          }

          nameFilter.addEventListener("keyup", (e) => {
            applyFilters(e.target.value);
          });
        }

        function attachSortInteractivity() {
          let colIx = -1;
          const tables = document.querySelectorAll("table");
          const sortTable = (tableIx, cellIndex, type, isSorded) => {
            const table = tables[tableIx];
            const tbody = table.querySelector('tbody[data-main="true"]');
            const thead = table.querySelector("thead");
            const inv = (val) => (isSorded ? -val : val);
            const compare = (a, b) => {
              const rowA = a.cells[cellIndex].innerHTML;
              const rowB = b.cells[cellIndex].innerHTML;
              if (type === "string") {
                if (rowA < rowB) return inv(-1);
                if (rowA > rowB) return inv(1);
                return 0;
              }
              if (type === "severity") {
                const orderA = severityOrder[rowA].order;
                const orderB = severityOrder[rowB].order;
                if (orderA < orderB) return inv(-1);
                if (orderA > orderB) return inv(1);
                return 0;
              }
            };
            let rows = Array(...tbody.rows);
            rows.sort(compare);
            table.removeChild(tbody);
            rows.forEach((row) => {
              tbody.appendChild(row);
            });
            insertAfter(thead, tbody);
          };
          tables.forEach((table, tableIx) => {
            table.addEventListener("click", (e) => {
              e.stopPropagation();
              const el = e.target;
              const type = el.getAttribute("data-type");
              const sortable = el.getAttribute("data-sortable") === "true";
              if (el.nodeName !== "TH" || !sortable) return;
              const cellIndex = el.cellIndex;
              sortTable(tableIx, cellIndex, type, colIx === cellIndex);
              colIx = colIx === cellIndex ? -1 : cellIndex;
            });
          });
        }

        function attachDependencyTreeInteractivity() {
          const collapsable = document.querySelectorAll(".dependency-tree-node__dots");

          collapsable.forEach((col) => {
            col.addEventListener("click", () => {
              const topParent = col.closest(
                  ".tree > li > ul.dependency-tree-node__children.original > .dependency-tree-node__container"
              );
              let original, collapsed;
              for (let i = 0; i < topParent.children.length; i++) {
                if (topParent.children[i].classList.contains("original")) {
                  original = topParent.children[i];
                  continue;
                }
                if (topParent.children[i].classList.contains("collapsed")) {
                  collapsed = topParent.children[i];
                }
              }
              original.classList.remove("hidden");
              collapsed.classList.add("hidden");
            });
          });
        }

        document.addEventListener("DOMContentLoaded", () => {
          attachLinksInteractivity();
          attachSortInteractivity();
          attachFilterInteractivity();
          attachDependencyTreeInteractivity();
        });

        </script>
</head>
<body>
<main id="root">
{{- if .Results }}
    <h1 id="report-title">Trivy Report - <span class="report-title__target"> {{ ( index .Results 0 ).Target }}</span>
    </h1>
    <div class="filter_bar">
        <input type="text" placeholder="Search.."
               title="Search by package, vulnerability id, severity, installed version"
               class="filter_bar__filter_name search">
    </div>


{{- range .Results }}
{{- if or .Vulnerabilities .Misconfigurations .Secrets}}
    <div class="header">
        <h3 class="header__title ta-center"> {{ .Target}} </h3>
    </div>

{{- if .Vulnerabilities }}
    <table>
        <thead>
        <tr class="sub-header">
            <th data-type="string" data-sortable="true"><span> Package </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> Vulnerability ID </span>
                <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="severity" data-sortable="true"><span> Severity </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> Installed Version </span>
                <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="false"><span> Fixed Version </span>
                <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="false"><span> Links </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
        </tr>
          </thead>
           <tbody data-main="true">
    {{- range .Vulnerabilities }}
        <tr class="filterable">
            <td class="pkg-name break-word">{{ .PkgName }}</td>
            <td class="vuln">{{ .VulnerabilityID }}</td>
            <td class="severity ta-center">{{ .Vulnerability.Severity }}</td>
            <td class="pkg-version ta-center">{{ .InstalledVersion }}</td>
            <td class="fixed-version ta-center">{{ .FixedVersion }}</td>
            <td class="links"  data-more-links="off">
                 {{- range .Vulnerability.References }}
                <a href={{ . | printf "%q" }}>{{ . }}</a>
                {{- end }}
            </td>
        </tr>
    {{- end}}
    </tbody>
    </table>
{{- end }}

    {{- if .Misconfigurations }}
        <table>
            <thead>
            <tr class="sub-header">
                <th data-type="string" data-sortable="true"><span> Type </span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16" height="16" viewBox="0 0 16 16">
                        <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                    </svg>
                </th>
                <th data-type="string" data-sortable="true"><span> Misconf ID </span>
                    <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                    </svg>
                </th>
                <th data-type="string" data-sortable="true"><span> Check </span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16" height="16" viewBox="0 0 16 16">
                        <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                    </svg>
                </th>
                <th data-type="severity" data-sortable="true"><span> Severity </span>
                    <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                    </svg>
                </th>

                <th data-type="string" data-sortable="false"><span> Message </span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16" height="16" viewBox="0 0 16 16">
                        <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                    </svg>
                </th>
            </tr>
              </thead>
               <tbody data-main="true">

        {{- range .Misconfigurations }}
            <tr class="filterable">
                <td class="misc-type">{{ .Type}}</td>
                <td class="misc-id">{{ .ID }}</td>
                <td class="misc-check">{{ .Title }}</td>
                <td class="severity ta-center">{{ .Severity }}</td>
                <td class="misc-msg">{{ .Message }}
                 <br>
                 <a href={{ .PrimaryURL | printf "%q" }}>{{ .PrimaryURL }}</a>
                 </br>
                </td>
            </tr>
        {{- end}}
        </tbody>
        </table>
{{- end }}

{{- if .Secrets }}
<div class="secret-results">
        <h3 class="secret-results__title">
            <span class="secret-results__title-target"> {{ .Target }}</span>
            <span class="secret-results__title-class"> ({{ .Class }})</span>
        </h3>

        <div class="secret-results__content">
        {{- $target := .Target }}
        {{- range .Secrets }}
        <div class="secret">
                <div class="secret__head">
                    <span class="secret__severity severity-{{ .Severity }}"> {{ .Severity }} </span>
                    <span class="secret__type"> {{.Category}} ({{ .RuleID }})</span>
                </div>
                <div class="secret__title"> {{ .Title }}</div>
                <div class="secret__src">
                    <span class="secret__src-file">{{ $target}}</span>
                    <span class="secret__src-delimiter">:</span>
                    <span class="secret__src-lines">
                    {{ if eq .StartLine .EndLine }}
                                {{ .StartLine }}
                            {{ else }}
                                {{ .StartLine }} - {{ .EndLine }}
                            {{ end }}</span>
                </div>
                <div class="secret__code">
                {{- range .Code.Lines }}
                {{- if .IsCause}}
                <div class="secret__line secret__line-cause">
                        <div class="secret__line-number">{{ .Number}}</div>
                        <div class="secret__line-code">
                        <pre> {{.Content}}</pre>
                        </div>
                    </div>
                {{- else}}
                <div class="secret__line">
                        <div class="secret__line-number">{{ .Number}}</div>
                        <div class="secret__line-code">
                        <pre> {{.Content}} </pre>
                        </div>
                    </div>
                {{- end }}
                {{- end}}
                </div>
           </div>
        </div>
          {{- end}}
    </div>
  {{- end}}

{{- if .Packages }}
 <div class="header">
        <h3 class="header__title ta-center">Packages</h3>
    </div>

    <table>
        <thead>
        <tr class="sub-header">
            <th data-type="string" data-sortable="true"><span> ID </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> Name </span>
                <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> Version </span>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> SrcName </span>
                <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>
            <th data-type="string" data-sortable="true"><span> SrcVersion </span>
                <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#444" d="M11 7H5l3-4zM5 9h6l-3 4z"/>
                </svg>
            </th>

        </tr>
          </thead>
           <tbody data-main="true">
    {{- range .Packages }}
        <tr class="filterable">
            <td class="pkg-version">{{ .ID }}</td>
            <td class=".pkg-key-name">{{ .Name }}</td>
            <td class="pkg-key-version ta-center">{{ .Version }}</td>
            <td class="pkg-key-src-name">{{ .SrcName }}</td>
            <td class=".pkg-key-src-version">{{ .SrcVersion }}</td>
        </tr>
    {{- end}}
    </tbody>
    </table>
{{- end }}

{{- end }}
{{- end }}
{{- else }}
<h2> Trivy Returned Empty Report <h2>
{{- end }}
</main>
</body>
</html>