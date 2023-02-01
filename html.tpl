<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  {{- if . }}
  <style>
    * {
      font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
      text-align: center;
    }

    .link {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      height: 1.2em;
      white-space: nowrap;
    }

    .group-header th {
      font-size: 200%;
    }

    table,
    th,
    td {
      border-bottom: 1px solid #0000001f;
      border-collapse: collapse;
      white-space: nowrap;
      padding: .3em;
      white-space: normal;
    }

    table {
      margin: 0 auto;
      table-layout: fixed;
      width: 100%;
    }

    .severity {
      text-align: center;
      font-weight: bold;
    }

    .severity-LOW {
      background-color: #5fbb3160;
    }

    .severity-MEDIUM {
      background-color: #e9c60060;
    }

    .severity-HIGH {
      background-color: #ff880060;
    }

    .severity-CRITICAL {
      background-color: #e4000060;
    }

    .severity-UNKNOWN {
      background-color: #74747460;
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

    .accordion__control {
      width: 100%;
      background-color: transparent;
      cursor: pointer;
    }

    .accordion__content {
      max-height: 0;
      opacity: 0;
      visibility: hidden;
      will-change: max-height;
      transition: all 0.3s ease-out;
      border: none;

    }

    .accordion__title {
      font-weight: bold;
      font-size: 1.17em;
    }

    .accordion__icon {
      transition: transform 0.3s ease-out;
    }

    .open .accordion__icon {
      transform: rotate(180deg);
    }

    .open .accordion__content {
      opacity: 1;
      visibility: visible;
      border: 1px solid #0000001f;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }

    th[data-sortable="true"] {
      cursor: pointer;
    }

    .sub-header th {
      font-size: 150%;
      text-align: center;

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

    .accordion__control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      padding: 20px;
      border: 1px solid #0000001f;
    }

    ul>li:first-child .accordion__control {
      border-radius: 8px 8px 0 0 !important;

    }

    ul>li:last-child .accordion__control {
      border-radius: 0 0 8px 8px;

    }

    .accordion__control::-webkit-details-marker {
      display: none;
    }

    .accordion+.accordion .accordion__control {
      border-top: none;
    }

    .accordion__title {
      margin: 0;
    }

    .pkg-version {
      text-align: center;
    }

    .accordion__icon {
      position: relative;
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }

    .accordion.open .accordion__control {
      transition: border-radius 0.3s ease-out;
    }

    ul {
      list-style-type: none;
    }
  </style>
  <title>{{- escapeXML ( index . 0 ).Target }} - Trivy Report - {{ now }} </title>
  <script>
    window.onload = function () {
      document.querySelectorAll('td.links').forEach(function (linkCell) {
        var links = [].concat.apply([], linkCell.querySelectorAll('a'));
        [].sort.apply(links, function (a, b) {
          return a.href > b.href ? 1 : -1;
        });
        links.forEach(function (link, idx) {
          if (links.length > 0 && 0 === idx) {
            var toggleLink = document.createElement('a');
            toggleLink.innerText = "Toggle more links";
            toggleLink.href = "#toggleMore";
            toggleLink.setAttribute("class", "toggle-more-links");
            linkCell.appendChild(toggleLink);
          }
          linkCell.appendChild(link);
        });
      });

      document.querySelectorAll('a.toggle-more-links').forEach(function (toggleLink) {
        toggleLink.onclick = function (e) {
          var expanded = toggleLink.parentElement.getAttribute("data-more-links");
          toggleLink.parentElement.setAttribute("data-more-links", "on" === expanded ? "off" : "on");
          const content = [...document.querySelectorAll('.accordion__content')].find(it => it.contains(e.currentTarget))
          content.style.maxHeight = content.scrollHeight + 'px';
          return false;
        };
      });
    };
    document.addEventListener('DOMContentLoaded', () => {
      const accordions = document.querySelectorAll('.accordion');

      accordions.forEach(el => {
        el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const control = self.querySelector('.accordion__control');
          const content = self.querySelector('.accordion__content');

          self.classList.toggle('open');

          if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
          }
        });
      });
    });
    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    const severityOrder = {
      UNKNOWN: { order: 5 },
      LOW: { order: 4 },
      MEDIUM: { order: 3 },
      HIGH: { order: 2 },
      CRITICAL: { order: 1 }
    }
    document.addEventListener('DOMContentLoaded', () => {
      let colIx = -1;
      const tables = document.querySelectorAll('table');
      const sortTable = (tableIx, cellIndex, type, isSorded) => {
        const table = tables[tableIx]
        const tbody = table.querySelector('tbody[data-main="true"]');
        const thead = table.querySelector('thead');
        const inv = (val) => isSorded ? -val : val;
        const compare = (a, b) => {
          const rowA = a.cells[cellIndex].innerHTML;
          const rowB = b.cells[cellIndex].innerHTML;
          if (type === 'string') {
            if (rowA < rowB) return inv(-1);
            if (rowA > rowB) return inv(1);
            return 0;
          }
          if (type === 'severity') {
            const orderA = severityOrder[rowA].order;
            const orderB = severityOrder[rowB].order;
            if (orderA < orderB) return inv(-1);
            if (orderA > orderB) return inv(1);
            return 0;
          }
        }
        let rows = Array(...tbody.rows)
        rows.sort(compare);
        table.removeChild(tbody);
        rows.forEach(row => {
          tbody.appendChild(row);
        })
        insertAfter(thead, tbody);
      }
      tables.forEach((table, tableIx) => {
        table.addEventListener('click', (e) => {
          e.stopPropagation();
          const el = e.target;
          const type = el.getAttribute('data-type');
          const sortable = el.getAttribute('data-sortable') === 'true';
          if (el.nodeName !== 'TH' || !sortable) return;
          const cellIndex = el.cellIndex;
          sortTable(tableIx, cellIndex, type, colIx === cellIndex);
          colIx = colIx === cellIndex ? -1 : cellIndex;
        })
      })
    });
  </script>
</head>

<body>
  <h1>{{- escapeXML ( index . 0 ).Target }} - Trivy Report - {{ now }}</h1>

  <ul class="accordion__list">
    {{- range . }}
    <li class="accordion">
      <button class="accordion__control" aria-expanded="false">
        <span class="accordion__title">{{ escapeXML .Type }}</span>
        <span class="accordion__icon">
          <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true"
            viewBox="0 0 24 24" data-testid="ExpandMoreIcon">
            <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </span>
      </button>
      <div class="accordion__content" aria-hidden="true">
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
              <th data-type="severity" data-sortable="true"><span> Severity </span> <svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
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
            <tr class="severity-{{ escapeXML .Vulnerability.Severity }}">
              <td class="pkg-name">{{ escapeXML .PkgName }}</td>
              <td>{{ escapeXML .VulnerabilityID }}</td>
              <td class="severity">{{ escapeXML .Vulnerability.Severity }}</td>
              <td class="pkg-version">{{ escapeXML .InstalledVersion }}</td>
              <td>{{ escapeXML .FixedVersion }}</td>
              <td class="links" data-more-links="off">
                {{- range .Vulnerability.References }}
                <a class="link" href={{ escapeXML . | printf "%q" }}>{{ escapeXML . }}</a>
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
              <a href={{ escapeXML .PrimaryURL | printf "%q" }}>{{ escapeXML .PrimaryURL }}</a>
              </br>
            </td>
          </tr>
          {{- end }}
          {{- end }}

        </table>
      </div>
    </li>

    {{- end }}
  </ul>


  {{- else }}
  </head>

  <body>
    <h1>Trivy Returned Empty Report</h1>
    {{- end }}
  </body>

</html>