/* available templates */
const reportTitleTemplate = document.querySelector("#report-title");
const tableTemplate = document.querySelector("#table");
const tableRowTemplate = document.querySelector("#table-row");
const vulnLinkTemplate = document.querySelector("#vuln-link");
const emptyVulnsTemplate = document.querySelector("#empty-vuln-header");
const topVulnTemplate = document.querySelector("#top-vuln");
const miscTableRowTemplate = document.querySelector("#misc-table-row");
const mistTableTemplate = document.querySelector("#misc-table");
const emptyMiscTemplate = document.querySelector("#empty-misc-header");
const topMiscTemplate = document.querySelector("#top-misc");
const secretResultsTemplate = document.querySelector("#secret-results");
const secretTemplate = document.querySelector("#secret");
const secretCodeLineTemplate = document.querySelector("#secret__code-line");
const resultContainerTemplate = document.querySelector("#result-container");
const pkgTableTemplateTemplate = document.querySelector("#pkgs-table");
const tableHeadCellTemplate = document.querySelector("#table-head-cell");
const tableBodyRowTemplate = document.querySelector("#table-body-row");
const tableBodyCellTemplate = document.querySelector("#table-body-cell");

/* available templates */
const pkgKeys = {
  ID: {
    dataType: "string",
    dataSortable: true,
    classes: [],
  },
  Name: {
    dataType: "string",
    dataSortable: true,
    classes: ["break-word", "pkg-key-name"],
  },
  Version: {
    dataType: "string",
    dataSortable: true,
    classes: ["ta-center", "break-word", "pkg-key-version"],
  },
  SrcName: {
    dataType: "string",
    dataSortable: true,
    classes: ["break-word", "pkg-key-src-name"],
  },
  SrcVersion: {
    dataType: "string",
    dataSortable: true,
    classes: ["break-word", "pkg-key-src-version"],
  },
};

/**
 *
 * @param firstPkgKeys
 * @param pkgTableHead
 * @returns {*[]} array of available keys
 */
function fillPkgTableHeadAndGetAvailableKeys(firstPkgKeys, pkgTableHead) {
  const availableKeys = [];
  const headCells = [];
  firstPkgKeys.forEach((key) => {
    if (!pkgKeys[key]) return;
    availableKeys.push(key);
    const tableHeadCell = tableHeadCellTemplate.content.cloneNode(true);
    const th = tableHeadCell.querySelector("th");
    const content = tableHeadCell.querySelector(".table-head-cell__content");
    th.dataset.type = pkgKeys[key].dataType;
    th.dataset.sortable = pkgKeys[key].dataSortable;
    content.textContent = key;
    headCells.push(th);
  });
  pkgTableHead.append(...headCells);
  return availableKeys;
}

function fillResultsTable(result) {
  const vulnerabilitiesTable = tableTemplate.content.cloneNode(true);
  const vulnerabilitiesTableHeader =
    vulnerabilitiesTable.querySelector(".header__title");
  const vulnerabilitiesTableBody = vulnerabilitiesTable.querySelector("tbody");
  result.Vulnerabilities.forEach((vuln) => {
    const resultTableRow = tableRowTemplate.content.cloneNode(true);
    const pkgName = resultTableRow.querySelector(".pkg-name");
    pkgName.textContent = vuln.PkgName;
    const vulnerability = resultTableRow.querySelector(".vuln");
    vulnerability.textContent = vuln.VulnerabilityID;
    const severity = resultTableRow.querySelector(".severity");
    severity.textContent = vuln.Severity;
    const pkgVersion = resultTableRow.querySelector(".pkg-version");
    pkgVersion.textContent = vuln.InstalledVersion;
    const fixVersion = resultTableRow.querySelector(".fix-version");
    fixVersion.textContent = vuln.FixedVersion;
    const links = resultTableRow.querySelector(".links");
    if (vuln.References) {
      vuln.References.forEach((ref) => {
        const vulnLink = vulnLinkTemplate.content.cloneNode(true);
        const linkElement = vulnLink.querySelector("a");
        linkElement.href = ref;
        linkElement.textContent = ref;
        links.append(linkElement);
      });
    }
    vulnerabilitiesTableBody.append(resultTableRow);
  });
  vulnerabilitiesTableHeader.textContent = result.Type;
  return vulnerabilitiesTable;
}

function fillPkgTable(result) {
  const pkgTable = pkgTableTemplateTemplate.content.cloneNode(true);
  const pkgTableBody = pkgTable.querySelector("tbody");
  const pkgTableHeadRow = pkgTable.querySelector("thead tr");
  const firstPkgKeys = Object.keys(result.Packages[0]);
  const availablePgkKeys = fillPkgTableHeadAndGetAvailableKeys(
    firstPkgKeys,
    pkgTableHeadRow
  );
  const pkgTableRows = result.Packages.map((pkg) => {
    const pkgRow = tableBodyRowTemplate.content.cloneNode(true);
    const rowContainer = pkgRow.querySelector("tr");
    const pkgRows = availablePgkKeys.map((key) => {
      const pkgCell = tableBodyCellTemplate.content.cloneNode(true);
      const cellContainer = pkgCell.querySelector("td");
      if (pkg[key]) {
        cellContainer.textContent = pkg[key];
        pkgKeys[key].classes &&
          cellContainer.classList.add(...pkgKeys[key].classes);
      }
      return pkgCell;
    });
    rowContainer.append(...pkgRows);
    return pkgRow;
  });
  return { pkgTable, pkgTableBody, pkgTableRows };
}

function fillResults(result) {
  const resultContainer = resultContainerTemplate.content.cloneNode(true);
  const tablesContainer = resultContainer.querySelector(".tables");

  if (result.Vulnerabilities) {
    const vulnerabilitiesTable = fillResultsTable(result);
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

function fillSecrets(result) {
  const secretResults = secretResultsTemplate.content.cloneNode(true);
  const secretsContainer = secretResults.querySelector(
    ".secret-results__content"
  );
  const secretsContainerTitle = secretResults.querySelector(
    ".secret-results__title"
  );
  const secretResultsTitleTarget = secretsContainerTitle.querySelector(
    ".secret-results__title-target"
  );
  secretResultsTitleTarget.textContent = result.Target;
  const secretResultsTitleClass = secretsContainerTitle.querySelector(
    ".secret-results__title-class"
  );
  secretResultsTitleClass.textContent = `(${result.Class})`;
  // Secrets field is not empty
  const secrets = result.Secrets.map((secret) => {
    const secretNode = secretTemplate.content.cloneNode(true);
    const secretTitle = secretNode.querySelector(".secret__title");
    const secretHead = secretNode.querySelector(".secret__head");
    const secretSrc = secretNode.querySelector(".secret__src");
    const secretCode = secretNode.querySelector(".secret__code");
    /*HEAD*/
    const secretSeverity = secretHead.querySelector(".secret__severity");
    secretSeverity.classList.toggle(`severity-${secret.Severity}`);
    secretSeverity.textContent = secret.Severity;
    const secretType = secretHead.querySelector(".secret__type");
    secretType.textContent = `${secret.Category} (${secret.RuleID})`;
    /*HEAD*/
    /*TITLE*/
    secretTitle.textContent = secret.Title;
    /*TITLE*/
    /*SRC*/
    const secretSrcFile = secretSrc.querySelector(".secret__src-file");
    secretSrcFile.textContent = result.Target;
    const secretSrcLines = secretSrc.querySelector(".secret__src-lines");
    secretSrcLines.textContent =
      secret.StartLine === secret.EndLine
        ? secret.StartLine
        : `${secret.StartLine} - ${secret.EndLine}`;
    /*SRC*/
    const lines = secret.Code.Lines.map((line) => {
      const secretCodeLine = secretCodeLineTemplate.content.cloneNode(true);
      const secretLine = secretCodeLine.querySelector(".secret__line");
      const secretLineNumber = secretLine.querySelector(".secret__line-number");
      secretLineNumber.textContent = line.Number.toString();
      const secretLineCode = secretLine.querySelector(".secret__line-code pre");
      secretLineCode.textContent = line.Content;
      if (line.IsCause) {
        secretLine.classList.toggle("secret__line-cause");
      }
      return secretCodeLine;
    });
    secretCode.append(...lines);
    return secretNode;
  });
  secretsContainer.append(...secrets);
  return secretResults;
}

function getEmptyResult() {
  const resultTable = tableTemplate.content.cloneNode(true);
  const resultTableBody = resultTable.querySelector("tbody");
  const emptyVulns = emptyVulnsTemplate.content.cloneNode(true);
  resultTableBody.append(emptyVulns);
  return resultTable;
}

function getResultTablesByResults(resultsData) {
  const resultTables = [];
  const secretsTables = [];
  for (const result of resultsData) {
    if (result.Vulnerabilities && result.Vulnerabilities.length) {
      // Vulnerabilities field is not empty
      const resultTable = fillResults(result);
      resultTables.push(resultTable);
    } else if (result.Secrets && result.Secrets.length) {
      // Secrets field is not empty
      const secret = fillSecrets(result);
      secretsTables.push(secret);
    } else {
      // on empty/unhandled
      const emptyResult = getEmptyResult();
      resultTables.push(emptyResult);
    }
  }
  return { resultTables, secretsTables };
}

function getMiscResultTables(topMisconfiguration) {
  return topMisconfiguration.Results.map((result) => {
    const resultTable = mistTableTemplate.content.cloneNode(true);
    const resultTableHeader = resultTable.querySelector(".header__title");
    const resultTableBody = resultTable.querySelector("tbody");
    if (!result.Misconfigurations || !result.Misconfigurations.length) {
      const emptyMisc = emptyMiscTemplate.content.cloneNode(true);
      resultTableBody.append(emptyMisc);
      return resultTable;
    }
    /*filling table*/
    result.Misconfigurations.forEach((misc) => {
      const resultTableRow = miscTableRowTemplate.content.cloneNode(true);
      const pkgName = resultTableRow.querySelector(".misc-type");
      pkgName.textContent = misc.Type;
      const vulnerability = resultTableRow.querySelector(".misc-id");
      vulnerability.textContent = misc.ID;
      const severity = resultTableRow.querySelector(".misc-check");
      severity.textContent = misc.Title;
      const pkgVersion = resultTableRow.querySelector(".misc-sev");
      pkgVersion.textContent = misc.Severity;
      const fixVersion = resultTableRow.querySelector(".misc-msg");
      fixVersion.textContent = misc.Message;

      resultTableBody.append(resultTableRow);
    });
    /*filling table*/
    resultTableHeader.textContent = result.Type;
    return resultTable;
  });
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

function getTopMiscResultTables() {
  return trivyData.Misconfigurations.map((topMisconfiguration) => {
    const topMisc = topMiscTemplate.content.cloneNode(true);
    const topMiscTablesContainer = topMisc.querySelector(".tables-container");
    const topMiscHeader = topMisc.querySelector("h2");
    topMiscHeader.textContent = `${topMisconfiguration.Name} (${topMisconfiguration.Kind})`;
    const resultTables = getMiscResultTables(
      topMisconfiguration,
      mistTableTemplate,
      emptyMiscTemplate,
      miscTableRowTemplate
    );
    topMiscTablesContainer.append(...resultTables);
    return topMisc;
  });
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

function render() {
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

document.addEventListener("DOMContentLoaded", render);
