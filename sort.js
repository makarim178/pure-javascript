let sortedRows = Array.from(table.tBodies[0].rows)
    .sort((rowA, rowB) => rowA.cells[0].innerText.localeCompare(rowB.cells[0].innerText));

table.tBodies[0].append(...sortedRows);