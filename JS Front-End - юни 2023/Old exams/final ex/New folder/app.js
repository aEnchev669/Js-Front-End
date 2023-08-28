const baseUrl = `http://localhost:3030/jsonstore/tasks/`;
const courseList = document.getElementById('list');

const loadBtnElement = document.getElementById('load-vacations');
const addBtnElement = document.getElementById('add-vacation');
const courseName = document.getElementById('name');
const courseDays = document.getElementById('num-days');
const courseDate = document.getElementById('from-date');
addBtnElement.addEventListener('click', addCourse)

async function addCourse(e) {

    e.preventDefault();

    const nameCourse = courseName.value;
    const daysCourse = courseDays.value;
    const dataCourse = courseDate.value;
    const course = {
        nameCourse,
        daysCourse,
        dataCourse,
    };

    await fetch(baseUrl, {
        method: 'POST',

        body: JSON.stringify(course)
    });

    courseName.value = '';
    courseDays.value = '';
    courseDate.value = '';



    await loadCourses();
}


loadBtnElement.addEventListener('click', loadCourses)

async function loadCourses() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    courseList.innerHTML = '';

    const courses = Object.values(data);
  


    for (const course of courses) {
        const coursElement = render(course);
        courseList.appendChild(coursElement);
    }
}

function render(course) {

    const h2 = document.createElement('h2');
    h2.textContent = course.name;
    const h31 = document.createElement('h3');
    h31.textContent = course.date;
    const h32 = document.createElement('h3');
    h32.textContent = course.days;

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = 'Done';

    const div = document.createElement('div');
    div.className = 'container';

    div.appendChild(h2);
    div.appendChild(h31);
    div.appendChild(h32);
    div.appendChild(changeBtn);
    div.appendChild(doneBtn);

    return div;
}