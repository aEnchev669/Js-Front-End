function solve() {

  const input = Array.from((document.getElementById('input').value).split("."));
  const output = document.getElementById('output');
  input.pop();


  while (input.length > 0) {
    const p = document.createElement("p");
    p.textContent = input.splice(0, 3).map(text => text.trim()).join(".")
    p.textContent += '.';

    output.appendChild(p);
  }


  document.getElementById('input').value = '';
}
