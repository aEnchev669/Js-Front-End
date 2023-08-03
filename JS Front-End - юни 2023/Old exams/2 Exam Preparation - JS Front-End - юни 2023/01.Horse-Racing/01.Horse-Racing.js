function solve(input) {

    let horses = (input.splice(0, 1)[0]).split('|');

    let commands = (input.splice(0, 1));

    while (commands != 'Finish') {
        let tokens = commands[0].split(' ');
        let cmd = tokens[0];

        if (cmd == 'Retake') {
            let overtakingHorse = tokens[1];
            let overtakenHorse = tokens[2];

            let indexOfOvertaking = horses.indexOf(overtakingHorse);
            let indexOfOvertaken = horses.indexOf(overtakenHorse);
            if (indexOfOvertaking < indexOfOvertaken) {
                horses[indexOfOvertaken] = overtakingHorse;
                horses[indexOfOvertaking] = overtakenHorse;

                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
            }
        }
        else if (cmd == 'Trouble') {
            let name = tokens[1];
            let index = horses.indexOf(name);

            if (index > 0) {
                horses[index] = horses[index - 1];
                horses[index - 1] = name;

                console.log(`Trouble for ${name} - drops one position.`);
            }
        }
        else if (cmd == 'Rage') {
            let name = tokens[1];
            let index = horses.indexOf(name);

            if (index != horses.length - 1) {

                if (index == horses.length - 2) {
                    horses[horses.length - 1] = name;
                    horses[horses.length - 2] = horses[horses.length - 1];
                }
                else {
                    let firstHorse = horses[index + 2];
                    let secondHorse = horses[index + 1];

                    let indexFirst = horses.indexOf(firstHorse);
                    let indexSecond = horses.indexOf(secondHorse);

                    horses[indexFirst] = name;
                    horses[indexSecond] = firstHorse;
                    horses[index] = secondHorse;
                }
            }
            console.log(`${name} rages 2 positions ahead.`); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
        }
        else if (cmd == 'Miracle') {
            let name = horses.shift();
            horses.push(name);

            console.log(`What a miracle - ${name} becomes first.`)
        }
        commands = input.splice(0, 1);
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`);

}

solve((['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])

);