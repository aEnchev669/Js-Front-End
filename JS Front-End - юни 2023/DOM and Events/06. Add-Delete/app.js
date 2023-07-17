function addItem() {
    const givenItem = document.getElementById('newItemText');
    const items = document.getElementById('items');

    let li = document.createElement('li');

    let btn = document.createElement('a');
    btn.textContent = '[Delete]';
    btn.href = '#'; 

    li.textContent = givenItem.value;
    li.appendChild(btn);
    btn.addEventListener('click', ()=> {
        btn.parentElement.remove();
    });

    // if(btn.clicked){
    //     console.log('asd');
    //     btn.parentElement.remove();
    // }
    givenItem.value = '';
    items.appendChild(li);
}