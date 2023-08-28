function solve(input) {

    let inputGroceries = input.shift();
    let groceries = inputGroceries.split('!');

    let commands = input.shift();
    while (commands != 'Go Shopping!') {

        let tokens = commands.split(' ');
        let command = tokens[0];

        if (command == 'Urgent') {
            Urgent(tokens[1]);
        }
        else if (command == 'Unnecessary') {
            Unnecessary(tokens[1]);
        }
        else if (command == 'Correct') {
            Correct(tokens[1], tokens[2]);
        }
        else if (command == 'Rearrange') {
            Rearrange(tokens[1]);
        }

        commands = input.shift();
    }


    function Urgent(item) {
        if (!(groceries.includes(item))) {
            groceries.unshift(item);
        }
    }

    function Unnecessary(item) {
        if (groceries.includes(item)) {
            let index = groceries.indexOf(item);
            groceries.splice(index, 1);
        }
    }

    function Correct(oldItem, newItem) {
        if (groceries.includes(oldItem)) {
            let index = groceries.indexOf(oldItem);
            groceries[index] = newItem
        }
    }

    function Rearrange(item) {
        if (groceries.includes(item)) {
            let index = groceries.indexOf(item);
            groceries.splite(index, 1);
            groceries.push(item);
        }
    }

    console.log(groceries.join(', '));
}



solve((["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion",

"Rearrange Grapes",

"Correct Tomatoes Potatoes",
'asd',


"Go Shopping!"]));