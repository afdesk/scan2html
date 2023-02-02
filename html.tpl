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
      border: 1px solid #ddd;
    }

    .severity {
      text-align: center;
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

    .pkg-version {
      text-align: center;
    }

    ul {
      list-style-type: none;
    }

    .title {
      text-align: center;
      font-size: 24px;
      border-bottom: 1px solid #0000001f;
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

    .filter_bar__filter_sev {
      position: relative;
      min-width: 200px;
    }

    .filter_bar__filter_sev select {
      -webkit-appearance: none;
      padding: 12px 40px 13px 12px;
      width: 100%;
      border: 1px solid #e8eaed;
      background: #fff;
      box-shadow: 0 1px 3px -2px #9098a9;
      cursor: pointer;
      font-family: inherit;
      font-size: 16px;
      transition: all 150ms ease;
    }

    .filter_bar__filter_sev select:required:invalid {
      color: #5a667f;
    }

    .filter_bar__filter_sev select option {
      color: #223254;
    }

    .filter_bar__filter_sev select option[value=""][disabled] {
      display: none;
    }

    .filter_bar__filter_sev select:focus {
      outline: none;
      border-color: #07f;
      box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
    }

    .filterable:hover {
      background-color: #f1f1f1;
    }

    .header__title {
      font-size: 24px;
      text-align: center;
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
          return false;
        };
      });
    };
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

      const filterBar = document.querySelector('.filter_bar');

      const nameFilter = filterBar.querySelector('.filter_bar__filter_name');
      const vulnFilter = filterBar.querySelector('.filter_bar__filter_vuln');
      const sevFilter = filterBar.querySelector('.filter_bar__filter_sev_select');
      const instVerFilter = filterBar.querySelector('.filter_bar__filter_inst_ver');

      const pkgNameCells = document.querySelectorAll('.pkg-name'); // all tables
      const vulnCells = document.querySelectorAll('.vuln'); // all tables
      const severityCells = document.querySelectorAll('.severity'); // all tables
      const pkgVersionCells = document.querySelectorAll('.pkg-version'); // all tables

      const filterable = document.querySelectorAll('.filterable');
      function applyFilters(
        nextNameFilterValue,
        nextVulnFilterValue,
        nextSevFilterValue,
        nextInstVerFilterValue,
      ) {
        filterable.forEach(f => {
          const pkgNameCell = f.querySelector('.pkg-name');
          const vulnCell = f.querySelector('.vuln');
          const severityCell = f.querySelector('.severity');
          const pkgVersionCell = f.querySelector('.pkg-version');

          const pkgNameCellValue = pkgNameCell.textContent || pkgNameCell.innerText;
          const vulnCellValue = vulnCell.textContent || vulnCell.innerText;
          const severityCellValue = severityCell.textContent || severityCell.innerText;
          const pkgVersionCellValue = pkgVersionCell.textContent || pkgVersionCell.innerText;

          const condition =
            (!nextNameFilterValue || pkgNameCellValue.toUpperCase().indexOf(nextNameFilterValue.toUpperCase()) > -1) &&
            (!nextVulnFilterValue || vulnCellValue.toUpperCase().indexOf(nextVulnFilterValue.toUpperCase()) > -1) &&
            (!nextSevFilterValue || severityCellValue.toUpperCase().indexOf(nextSevFilterValue.toUpperCase()) > -1) &&
            (!nextInstVerFilterValue || pkgVersionCellValue.toUpperCase().indexOf(nextInstVerFilterValue.toUpperCase()) > -1);
          console.log(
            {
              nextNameFilterValueBoolean: (!nextNameFilterValue || pkgNameCellValue.toUpperCase().indexOf(nextNameFilterValue.toUpperCase()) > -1),
              nextNameFilterValue,
              pkgNameCellValue,
              nextVulnFilterValueBoolean: (!nextVulnFilterValue || vulnCellValue.toUpperCase().indexOf(nextVulnFilterValue.toUpperCase()) > -1),
              nextVulnFilterValue,
              vulnCellValue,
              nextSevFilterValueBoolean: (!nextSevFilterValue || severityCellValue.toUpperCase().indexOf(nextSevFilterValue.toUpperCase()) > -1),
              nextSevFilterValue,
              severityCellValue,
              nextInstVerFilterValueBoolean: (!nextInstVerFilterValue || pkgVersionCellValue.toUpperCase().indexOf(nextInstVerFilterValue.toUpperCase()) > -1),
              nextInstVerFilterValue,
              pkgVersionCellValue,
            });
          if (condition) f.style.display = '';
          else f.style.display = 'none';
        })
      }
      nameFilter.addEventListener('keyup', (e) => {
        const nameFilterValue = nameFilter.value;
        const vulnFilterValue = vulnFilter.value;
        const sevFilterValue = sevFilter.value;
        const instVerFilterValue = instVerFilter.value;
        console.log({
          nameFilterValue,
          vulnFilterValue,
          sevFilterValue,
          instVerFilterValue,
        })
        applyFilters(e.target.value,
          vulnFilterValue,
          sevFilterValue,
          instVerFilterValue,)
      })
      vulnFilter.addEventListener('keyup', (e) => {
        const nameFilterValue = nameFilter.value;
        const sevFilterValue = sevFilter.value;
        const instVerFilterValue = instVerFilter.value;
        applyFilters(nameFilterValue, e.target.value, sevFilterValue,
          instVerFilterValue)
      })
      sevFilter.addEventListener('change', (e) => {
        const nameFilterValue = nameFilter.value;
        const vulnFilterValue = vulnFilter.value;
        const instVerFilterValue = instVerFilter.value;
        console.log('e.target.value', e.target.value)
        applyFilters(nameFilterValue, vulnFilterValue, e.target.value, instVerFilterValue)
      })
      instVerFilter.addEventListener('keyup', (e) => {
        const nameFilterValue = nameFilter.value;
        const vulnFilterValue = vulnFilter.value;
        const sevFilterValue = sevFilter.value;
        applyFilters(nameFilterValue,
          vulnFilterValue,
          sevFilterValue,
          e.target.value)
      })
    });
  </script>
</head>

<body>
  <h1>{{- escapeXML ( index . 0 ).Target }} - Trivy Report - {{ now }}</h1>
  <div class="filter_bar">
    <input type="text" placeholder="Search for packages.." title="Type in a package"
      class="filter_bar__filter_name search">
    <input type="text" placeholder="Search for vulnerabitily ID.." title="Type in a vulnerabitily ID"
      class="filter_bar__filter_vuln search">


    <label class="filter_bar__filter_sev" for="slct">
      <select class="filter_bar__filter_sev_select" id="slct" required="required">
        <option value="">ALL</option>
        <option value="UNKNOWN">UNKNOWN</option>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
        <option value="CRITICAL">CRITICAL</option>
      </select>
    </label>
    <input type="text" placeholder="Search for installed version.." title="Type in a version"
      class="filter_bar__filter_inst_ver search">
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

  {{- end }}


  {{- else }}
  </head>

  <body>
    <h1>Trivy Returned Empty Report</h1>
    {{- end }}
  </body>

</html>