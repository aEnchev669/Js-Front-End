function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const tds = (Array.from(document.querySelectorAll('td')));
      const searchField = document.getElementById('searchField');
      tds.forEach(td => {
         if (td.parentElement.className == 'select') {
            td.parentElement.classList.remove('select');

         }

      });

      tds.forEach(td => {

         let stringTd = new String(td.textContent);
         if (stringTd.includes(searchField.value)) {
            td.parentElement.classList.add('select');


         }



      });
      searchField.value = '';
   }
}