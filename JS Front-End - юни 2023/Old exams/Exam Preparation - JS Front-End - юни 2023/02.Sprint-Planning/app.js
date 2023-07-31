window.addEventListener('load', solve);

function solve() {
    document.getElementById('create-task-btn').addEventListener('click', createTask);
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const label = document.getElementById('label');
    const points = document.getElementById('points');
    const assignee = document.getElementById('assignee');
    const tasksSection = document.getElementById('tasks-section');



    function createTask(title, description, label, points, assignee) {

        const article = document.createElement('article');
        const div1 = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');




    }
}