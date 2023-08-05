const baseUrl = `http://localhost:3030/jsonstore/tasks`;

const loadBtnElement = document.getElementById('load-course');

loadBtnElement.addEventListener('click',  loadCourses);

async function loadCourses() {

    const response = await fetch(baseUrl);
    const data = await response.json();
    const courses = Object.values(data);

    const courseListElement = document.getElementById('list');

    for (const course of courses) {
        const courseElement = renderCourse(course);

        courseListElement.appendChild(courseElement);
    }
}



function renderCourse(course) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = course.title;

    const teacherElement = document.createElement('h3');
    teacherElement.textContent = course.teacher;

    const typeElement = document.createElement('h3');
    typeElement.textContent = course.type;

    const descriptionElement = document.createElement('h4');
    descriptionElement.textContent = course.description;


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Course';
    editBtn.className = 'edit-btn';
    editBtn.disabled = true;

    const finishBtn = document.createElement('button');
    finishBtn.textContent = 'Finish Course';
    finishBtn.className = 'finish-btn';

    const corseContainer = document.createElement('div');
    corseContainer.className = 'container';

    corseContainer.appendChild(titleElement);
    corseContainer.appendChild(teacherElement);
    corseContainer.appendChild(typeElement);
    corseContainer.appendChild(descriptionElement);
    corseContainer.appendChild(editBtn);
    corseContainer.appendChild(finishBtn);

    return corseContainer;
}