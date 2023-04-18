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
