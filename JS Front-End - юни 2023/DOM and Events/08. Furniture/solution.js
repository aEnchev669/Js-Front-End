function solve() {

  const button = document.querySelector('#exercise button');
  button.addEventListener('click', parseInput);
}

function parseInput() {
  const input = JSON.parse(document.querySelector('#exercise textarea').value);
  const tbody = document.querySelector('tbody');


  input
    .map((furniture) => {
      let row = document.createElement('tr');

      let imgTd = document.createElement('td');
      let img = document.createElement('img');
      img.src = furniture.img;
      imgTd.append(img);

      let productTd = document.createElement('td');
      let productP = document.createElement('p');
      productP.textContent = furniture.name;
      productTd.appendChild(productP);

      let priuceTd = document.createElement('td');
      let price = document.createElement('p');
      price.textContent = furniture.price;
      priuceTd.appendChild(price);

      let decFacTd = document.createElement('td');
      let decFac = document.createElement('p');
      decFac.textContent = furniture.decFactor;
      decFacTd.appendChild(decFac);

      let inputTd = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      inputTd.appendChild(checkBox);

      row.appendChild(imgTd);
      row.appendChild(productTd);
      row.appendChild(priuceTd);
      row.appendChild(decFacTd);
      row.appendChild(inputTd);

      return row;
    })
    .forEach((row) => tbody.appendChild(row));

}