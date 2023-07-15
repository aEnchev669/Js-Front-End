function showText() {
    let btn = document.getElementById('more');
    let span = document.getElementById('text');

    btn.addEventListener(onclick, span.display = 'block');
}