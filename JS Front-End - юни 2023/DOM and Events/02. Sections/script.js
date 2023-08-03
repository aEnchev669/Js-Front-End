function create(words) {

   words.forEach(word => {


      let div = document.createElement('div');
      let p1 = document.createElement('p');
      p1.textContent = word;
      p1.style.display = 'none';
      div.appendChild(p1);
      const element = document.getElementById('content');
      element.appendChild(div);

      div.addEventListener('click', () => {
         p1.style.display = 'block';
      })


   });
}