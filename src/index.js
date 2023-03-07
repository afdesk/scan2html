window.onload = function () {
  const titleTimeElem = document.querySelector('#title-time');
  const goFormatDate = titleTimeElem.innerHTML;
  const goFormatDateParts = goFormatDate.split(' ');
  const localeDate = new Date(Date.parse(goFormatDateParts[0] + ' ' + goFormatDateParts[1])).toLocaleString();
  titleTimeElem.innerHTML = localeDate;
  titleTimeElem.classList.toggle('initially-disabled');
  document.title += ' ' + titleTimeElem.innerHTML;
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

  const pkgNameCells = document.querySelectorAll('.pkg-name'); // all tables
  const vulnCells = document.querySelectorAll('.vuln'); // all tables
  const severityCells = document.querySelectorAll('.severity'); // all tables
  const pkgVersionCells = document.querySelectorAll('.pkg-version'); // all tables

  const filterable = document.querySelectorAll('.filterable');
  const cellClasses = ['.pkg-name', '.vuln', '.severity', '.pkg-version']

  function applyFilters(
    nextNameFilterValue,
  ) {
    filterable.forEach(f => {
      if (!nextNameFilterValue) {
        return
      }
      
      const cellValues = cellClasses
        .map(cl => f.querySelector(cl))
        .map(cell => cell.textContent || cell.innerText)

      const condition = cellValues.some(
        cellValue => cellValue.toUpperCase().includes(nextNameFilterValue.toUpperCase())
      )
            
      f.style.display = condition ? '' : 'none'
    })
  }
  nameFilter.addEventListener('keyup', (e) => {
    applyFilters(e.target.value)
  })
});