function solve(input) {

    let groceries = (input.splice(0, 1)[0]).split('!');

    let commands = input.splice(0, 1)[0].split(' ');
    while (commands[0] != 'Go Shopping!') {
        let command = commands[0];

        let itemOrOldItem = commands[1];

        if (command == 'Urgent') {
            let index = groceries.indexOf(itemOrOldItem);

            if (index == -1 ) {
                groceries.unshift(itemOrOldItem);
            }
        }

        else if (command == 'Unnecessary') {
            let index = groceries.indexOf(itemOrOldItem);
            if (index != -1) {
                groceries.splice(index, 1);
            }
        }
        else if (command == 'Correct') {
            let index = groceries.indexOf(itemOrOldItem);
            let newItem = commands[2];
            if (index != -1) {
                groceries[index] = newItem;
            }
        }
        else if (command == 'Rearrange') {
            let index = groceries.indexOf(itemOrOldItem);
            if (index != -1) {
                groceries.splice(index, 1);
                groceries.push(itemOrOldItem);
            }
        }
        if (input[0] != 'Go Shopping!') {
            commands = input.splice(0, 1)[0].split(' ');
        }
        else {
            commands = input.splice(0, 1);
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
"Go Shopping!"])

);