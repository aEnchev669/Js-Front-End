window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');
  const preview = document.getElementById('preview-list');

  document.getElementById('form-btn').addEventListener('click', () => {

    document.getElementById('form-btn').disabled = true;
    if (!firstName.value || !lastName.value || !age.value || !story.value || !storyTitle.value || !genre.value) {
      return;
    }
    let li = document.createElement('li');
    li.classList = 'story-info';

    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    let p1 = document.createElement('p');
    p1.textContent = `Age: ${age.value}`;
    let p2 = document.createElement('p');
    p2.textContent = `Title: ${storyTitle.value}`;
    let p3 = document.createElement('p');
    p3.textContent = `Genre: ${genre.value}`
    let p4 = document.createElement('p');
    p4.textContent = story.value;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    let saveBtn = document.createElement('button');
    saveBtn.classList = 'save-btn';
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', () => {

      const main = document.getElementById('main');

      const wrapper1 = main.children[0];
      const wrapper2 = main.children[1];

      wrapper1.remove();
      wrapper2.remove();

      const h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!";

      main.appendChild(h1);

    });

    let editBtn = document.createElement('button');
    editBtn.classList = 'edit-btn';
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', () => {

      document.getElementById('form-btn').disabled = false;
      const parent = editBtn.parentElement;
      const h4 = parent.querySelector('h4');
      const p = parent.querySelectorAll('p');

      let name = (h4.textContent).slice(6, h4.textContent.length).split(' ');

      firstName.value = name[0];
      lastName.value = name[1];

      age.value = (p[0].textContent).slice(5, p[0].textContent.length);
      storyTitle.value = (p[1].textContent).slice(7, p[1].textContent.length);
      genre.value = (p[2].textContent).slice(7, p[2].textContent.length);
      story.value = p[3].textContent;
      parent.remove();

    });

    let deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete-btn';
    deleteBtn.textContent = 'Delete Story';

    deleteBtn.addEventListener('click', () => {
      document.getElementById('form-btn').disabled = false;

      const parent = deleteBtn.parentElement;
      parent.remove();
    });

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    preview.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = 'Disturbing';
    story.value = '';

  });
}
