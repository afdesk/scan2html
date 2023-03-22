
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