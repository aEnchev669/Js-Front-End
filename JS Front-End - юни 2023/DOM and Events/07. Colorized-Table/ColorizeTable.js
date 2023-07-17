function colorize() {
    const table = Array.from(document.querySelectorAll('td:nth-child(even)'));
    
    for (let i = 0; i < table.length; i++) {
        if (i % 2 == 0) {
            table[i].parentElement.style.background = 'Teal';
        }
    }
}