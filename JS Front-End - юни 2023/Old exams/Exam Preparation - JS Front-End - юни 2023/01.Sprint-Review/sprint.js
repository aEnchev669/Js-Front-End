function solve(array) {

    const n = Number(array.splice(0, 1)[0]);
    const tickets = array.splice(0, n);
    const comamnds = array.splice(0, array.length);


    const board = tickets.reduce((acc, curr) => {

        const [assignee, taskId, title, status, points] = curr.split(':');

        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }

        acc[assignee].push({ taskId, title, status, points: Number(points) });

        return acc;
    }, {});

    const commandsRunner = {
        'Add New': AddNewTask,
        'Change Status': changeTaskStatus,
        'Remove Task': RemoveTask,
    };

    comamnds.forEach(comamnd => {
        const [commandName, ...rest] = comamnd.split(':');
        commandsRunner[commandName](...rest);
    });


    

    function AddNewTask(assignee, taskId, title, status, points) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
        else {
            board[assignee].push({ taskId, title, status, points: Number(points) });
        }
    }

    function changeTaskStatus(assignee, taskId, newStatus) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        const task = board[assignee].find((t) => t.taskId === taskId)

        if (!task) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            return;
        }

        task.status = newStatus;


    }

    function RemoveTask(assignee, index) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        if (!board[assignee][index]) {
            console.log("Index is out of range!");
            return;
        }

        board[assignee].splice(index, 1);
    }

   
};

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug: ToDo: 3',
    'Mariya:BOP-1210:Fix Major Bug: In Progress: 3',
    'Peter:BOP-1211:POC:Code Review: 5',
    'Georgi:BOP-1212:Investigation Task: Done: 2',
    'Mariya:BOP-1213:New Account Page: In Progress: 13',
    'Add New:Kiril:BOP-1217:Add Info Page: In Progress: 5',
    'Change Status:Peter:BOP1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',]
);