function deleteByEmail() {
    let input = document.querySelector('input[name=email]').value;
    let result = document.getElementById('result');
    let table = Array.from(document.querySelectorAll('td:nth-child(even)'));



    const remove = table.find((box) => box.textContent == input);

    if (remove) {
        remove.parentElement.remove();
        result.textContent = 'Deleted';

    }
    else {
        result.textContent = 'Not found.';
     }


}