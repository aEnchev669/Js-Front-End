function addItem() {

    let items = document.getElementById('items');
    let result = document.getElementById('newItemText');

    let li = document.createElement('li');

    li.textContent = result.value;
    result.value = ' ';
    items.appendChild(li);

}