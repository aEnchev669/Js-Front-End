window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    const collection = document.getElementById('all-hits');

    addBtn.addEventListener('click', (e) => {

        e.preventDefault();
        if (!genre.value || !name.value || !author.value || !date.value) {
            return;
        }

        const collectionContainer = collection.querySelector('div');

        const div = document.createElement('div');
        div.classList = 'hits-info';

        const img = document.createElement('img');
        img.src = './static/img/img.png';

        const h21 = document.createElement('h2');
        h21.textContent = `Genre: ${genre.value}`;

        const h22 = document.createElement('h2');
        h22.textContent = `Name: ${name.value}`;

        const h23 = document.createElement('h2');
        h23.textContent = `Author: ${author.value}`;

        const h3 = document.createElement('h3');
        h3.textContent = `Date: ${date.value}`;

        const saveBtn = document.createElement('button');
        saveBtn.classList = 'save-btn';
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', () => {
            const parent = saveBtn.parentElement;
            const saveContainer = document.getElementsByClassName('saved-container');
            const btns = parent.querySelectorAll('button');
            btns[1].remove();
            btns[0].remove();

            saveContainer[0].appendChild(parent);
        });

        const likeBtn = document.createElement('button');
        likeBtn.classList = 'like-btn';
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', () => {

            const likes = document.getElementsByClassName('likes');
            const p = likes[0].querySelector('p').textContent;
            let numbers = Number(p[p.length - 1]) + 1;

            let p1 = `Total Likes: ${numbers}`

            likes[0].querySelector('p').textContent = p1;

            likeBtn.disabled = true;
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.remove();
        });

        div.appendChild(img);
        div.appendChild(h21);
        div.appendChild(h22);
        div.appendChild(h23);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        collectionContainer.appendChild(div);

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    });
}