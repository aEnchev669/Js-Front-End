function toggle() {
    const according = document.getElementById('accordion');
    const extra = document.getElementById('extra');
    const button = document.querySelector('span');


    if (button.textContent == 'More') {
        extra.style.display = 'block';
        button.textContent = 'Less';
    }
    else if (button.textContent == 'Less') {
        extra.style.display = 'none';
        button.textContent = 'More';

    }


}