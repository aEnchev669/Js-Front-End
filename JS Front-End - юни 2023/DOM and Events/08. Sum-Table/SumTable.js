function sumTable() {
    const table = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let sum = 0;
    for (let i = 0; i < table.length; i++) {
        sum += Number(table[i].textContent);
    }
    table[table.length - 1].textContent = sum;
}