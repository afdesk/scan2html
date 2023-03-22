function fillResults(result) {
  const resultContainer = resultContainerTemplate.content.cloneNode(true);
  const tablesContainer = resultContainer.querySelector(".tables");

  if (result.Vulnerabilities) {
    const vulnerabilitiesTable = fillVulnerabilitiesTable(result);
    tablesContainer.append(vulnerabilitiesTable);
  }

  if (result.Packages) {
    const { pkgTable, pkgTableBody, pkgTableRows } = fillPkgTable(result);
    pkgTableBody.append(...pkgTableRows);
    tablesContainer.append(pkgTable);
  }

  /*filling table*/
  return resultContainer;
}

function renderCreatedAt() {
  if (!createdAt) {
    return console.error("Creation timestamp not loaded");
  }
  const titleTimeElem = document.querySelector("#title-time");
  titleTimeElem.innerHTML = new Date(createdAt * 1000).toLocaleString();
  document.title += " " + titleTimeElem.innerHTML;
}

function getReportTitle(trivyData) {
  if (trivyData.Results) {
    return trivyData.Results[0].Target;
  }
  if (trivyData.Vulnerabilities) {
    return trivyData.Vulnerabilities[0].Name;
  }
}

function getTopVulnerabilities() {
  return trivyData.Vulnerabilities.map((topVulnerability) => {
    const topVuln = topVulnTemplate.content.cloneNode(true);
    const topVulnTablesContainer = topVuln.querySelector(".tables-container");
    const topVulnHeader = topVuln.querySelector("h2");
    topVulnHeader.textContent = `${topVulnerability.Name} (${topVulnerability.Kind})`;

    const { resultTables } = getResultTablesByResults(topVulnerability.Results);
    topVulnTablesContainer.append(...resultTables);
    return topVuln;
  });
}

function base() {
  if (!trivyData) {
    return console.error("Report data not loaded");
  }
  const root = document.querySelector("#root");
  if (!root) {
    return console.error("Can't find root");
  }
  const reportTitleTarget = reportTitleTemplate.querySelector(
    ".report-title__target"
  );
  reportTitleTarget.textContent = getReportTitle(trivyData);

  if (trivyData.Results) {
    const { resultTables, secretsTables } = getResultTablesByResults(
      trivyData.Results
    );
    if (resultTables) root.append(...resultTables);
    if (secretsTables) root.append(...secretsTables);
  } else if (trivyData.Vulnerabilities) {
    const topVulns = getTopVulnerabilities();
    root.append(...topVulns);
  }

  if (trivyData.Misconfigurations) {
    const miscResultTables = getTopMiscResultTables();
    root.append(...miscResultTables);
  }
  renderCreatedAt();
}

document.addEventListener("DOMContentLoaded", base);
