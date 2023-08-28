window.addEventListener("load", solve);

function solve() {

  const studentName = document.getElementById('student');
  const university = document.getElementById('university');
  const score = document.getElementById('score');
  const nextBtn = document.getElementById('next-btn');
  const previewList = document.getElementById('preview-list');
  const candidates = document.getElementById('candidates-list');


  nextBtn.addEventListener('click', () => {

    if (!studentName.value || !university.value || !score.value) {
      return;
    }
    const li = document.createElement('li');
    li.className = 'application';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = studentName.value;

    const p1 = document.createElement('p');
    p1.textContent = `University: ${university.value}`

    const p2 = document.createElement('p');
    p2.textContent = `Score: ${score.value}`

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'edit';
    editBtn.addEventListener('click', () => {
      let parent = editBtn.parentElement;

      let editH4 = parent.querySelector('h4')
      let editP = parent.querySelectorAll('p')

      let universityText = editP[0].textContent;
      let scoreText = editP[1].textContent;

      studentName.value = editH4.textContent;
      university.value = universityText.slice(12, universityText.length);
      score.value = Number(scoreText.slice(7, scoreText.length));

      nextBtn.disabled = false;
      parent.remove();
    })

    const actionBtn = document.createElement('button');
    actionBtn.className = 'action-btn apply';
    actionBtn.textContent = 'apply';
    actionBtn.addEventListener('click', () => {
      let parent = actionBtn.parentElement;

      let btns = parent.querySelectorAll('button');

      btns[0].remove();
      btns[1].remove();

      candidates.appendChild(parent);
    })


    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(actionBtn);

    previewList.appendChild(li);



    nextBtn.disabled = true;

    studentName.value = ''
    university.value = ''
    score.value = ''
  });


}
