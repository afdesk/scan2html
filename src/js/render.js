function getResultTablesByResults(tableTemplate, emptyVulnsTemplate, tableRowTemplate, vulnLinkTemplate, resultsData) {
	return resultsData.map(result => {
		const resultTable = tableTemplate.content.cloneNode(true);
		const resultTableHeader = resultTable.querySelector('.header__title');
		const resultTableBody = resultTable.querySelector('tbody');
		if (!result.Vulnerabilities || !result.Vulnerabilities.length) {
			const emptyVulns = emptyVulnsTemplate.content.cloneNode(true);
			resultTableBody.append(emptyVulns);
			return resultTable;
		}
		/*filling table*/
		result.Vulnerabilities.forEach(vuln => {
			const resultTableRow = tableRowTemplate.content.cloneNode(true);
			const pkgName = resultTableRow.querySelector('.pkg-name');
			pkgName.textContent = vuln.PkgName;
			const vulnerability = resultTableRow.querySelector('.vuln');
			vulnerability.textContent = vuln.VulnerabilityID;
			const severity = resultTableRow.querySelector('.severity');
			severity.textContent = vuln.Severity;
			const pkgVersion = resultTableRow.querySelector('.pkg-version');
			pkgVersion.textContent = vuln.InstalledVersion;
			const fixVersion = resultTableRow.querySelector('.fix-version');
			fixVersion.textContent = vuln.FixedVersion;
			const links = resultTableRow.querySelector('.links');
			vuln.References && vuln.References.forEach(ref => {
				const vulnLink = vulnLinkTemplate.content.cloneNode(true);
				const linkElement = vulnLink.querySelector('a');
				linkElement.href = ref;
				linkElement.textContent = ref;
				links.append(linkElement);
			})
			resultTableBody.append(resultTableRow);
		})
		/*filling table*/
		resultTableHeader.textContent = result.Type;
		return resultTable;
	});
}

function getMiscResultTables(topMisconfiguration, mistTableTemplate, emptyMiscTemplate, miscTableRowTemplate) {
	return topMisconfiguration.Results.map(result => {
		const resultTable = mistTableTemplate.content.cloneNode(true);
		const resultTableHeader = resultTable.querySelector('.header__title');
		const resultTableBody = resultTable.querySelector('tbody');
		if (!result.Misconfigurations || !result.Misconfigurations.length) {
			const emptyMisc = emptyMiscTemplate.content.cloneNode(true);
			resultTableBody.append(emptyMisc);
			return resultTable;
		}
		/*filling table*/
		result.Misconfigurations.forEach(misc => {
			const resultTableRow = miscTableRowTemplate.content.cloneNode(true);
			const pkgName = resultTableRow.querySelector('.misc-type');
			pkgName.textContent = misc.Type;
			const vulnerability = resultTableRow.querySelector('.misc-id');
			vulnerability.textContent = misc.ID;
			const severity = resultTableRow.querySelector('.misc-check');
			severity.textContent = misc.Title;
			const pkgVersion = resultTableRow.querySelector('.misc-sev');
			pkgVersion.textContent = misc.Severity;
			const fixVersion = resultTableRow.querySelector('.misc-msg');
			fixVersion.textContent = misc.Message;

			resultTableBody.append(resultTableRow);
		})
		/*filling table*/
		resultTableHeader.textContent = result.Type;
		return resultTable;
	});
}

function renderCreatedAt() {
	if (!createdAt) {
		return console.error("Creation timestamp not loaded");
	}
	const titleTimeElem = document.querySelector('#title-time');
	titleTimeElem.innerHTML = new Date(createdAt).toLocaleString();
	document.title += ' ' + titleTimeElem.innerHTML;
}

function render() {
	if (!trivyData) {
		return console.error("Report data not loaded");
	}
	const root = document.querySelector('#root');
	if (!root) {
		return console.error("Can't find root");
	}
	/* available templates */
	const reportTitleTemplate = document.querySelector('#report-title');
	const tableTemplate = document.querySelector('#table');
	const tableRowTemplate = document.querySelector('#table-row');
	const vulnLinkTemplate = document.querySelector('#vuln-link');
	const emptyVulnsTemplate = document.querySelector('#empty-vuln-header');
	const topVulnTemplate = document.querySelector('#top-vuln');
	const miscTableRowTemplate = document.querySelector('#misc-table-row');
	const mistTableTemplate = document.querySelector('#misc-table');
	const emptyMiscTemplate = document.querySelector('#empty-misc-header');
	const topMiscTemplate = document.querySelector('#top-misc');
	/* available templates */

	const reportTitleTarget = reportTitleTemplate.querySelector('.report-title__target');
	let resultTables;
	if (trivyData.Results) {
		reportTitleTarget.textContent = trivyData.Results[0].Target;
		resultTables = getResultTablesByResults(tableTemplate, emptyVulnsTemplate, tableRowTemplate, vulnLinkTemplate, trivyData.Results);
	} else if (trivyData.Vulnerabilities) {
		reportTitleTarget.textContent = trivyData.Vulnerabilities[0].Name;
		resultTables = trivyData.Vulnerabilities.map(topVulnerability => {
			const topVuln = topVulnTemplate.content.cloneNode(true);
			const topVulnTablesContainer = topVuln.querySelector('.tables-container');
			const topVulnHeader = topVuln.querySelector('h2');
			topVulnHeader.textContent = `${topVulnerability.Name} (${topVulnerability.Kind})`;
			const resultTables = getResultTablesByResults(tableTemplate, emptyVulnsTemplate, tableRowTemplate, vulnLinkTemplate, topVulnerability.Results);
			topVulnTablesContainer.append(...resultTables);
			return topVuln;
		});
	}
	root.append(...resultTables);
	if (trivyData.Misconfigurations) {
		const miscResultTables = trivyData.Misconfigurations.map(topMisconfiguration => {
			const topMisc = topMiscTemplate.content.cloneNode(true);
			const topMiscTablesContainer = topMisc.querySelector('.tables-container');
			const topMiscHeader = topMisc.querySelector('h2');
			topMiscHeader.textContent = `${topMisconfiguration.Name} (${topMisconfiguration.Kind})`;
			const resultTables = getMiscResultTables(topMisconfiguration, mistTableTemplate, emptyMiscTemplate, miscTableRowTemplate);
			topMiscTablesContainer.append(...resultTables);
			return topMisc;
		});
		root.append(...miscResultTables);
	}
	renderCreatedAt()
}

document.addEventListener('DOMContentLoaded', render)
