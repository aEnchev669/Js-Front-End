function solve(input) {

    let horses = input.shift().split('|');

    let commands = input.shift().split(' ');
    while (commands != 'Finish') {
        let command = commands[0];
        if (command == 'Retake') {
            let overtakingHorse = commands[1];
            let overtakenHorse = commands[2];

            let indexOfOvertaking = horses.indexOf(overtakingHorse);
            let indexOfOvertaken = horses.indexOf(overtakenHorse);

            if (overtakingHorse < overtakenHorse) {
                horses[indexOfOvertaking] = overtakenHorse;
                horses[indexOfOvertaken] = overtakingHorse;
                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
            }
        }
        else if (command == 'Trouble') {
            let givenHorse = commands[1];
            let indexOfGivenHorse = horses.indexOf(givenHorse);
            let neddedHorse = horses[indexOfGivenHorse - 1];

            if (indexOfGivenHorse != 0) {
                horses[indexOfGivenHorse] = neddedHorse;
                horses[indexOfGivenHorse - 1] = givenHorse;

                console.log(`Trouble for ${givenHorse} - drops one position.`);
            }
        }
        else if (command == 'Rage') {
            let givenHorse = commands[1];
            let indexOfGivenHorse = horses.indexOf(givenHorse);

            if ((horses.length - 1) != indexOfGivenHorse) {
                if ((horses.length - 2) == indexOfGivenHorse) {
                    horses[horses.length - 2] = horses[horses.length - 1]
                    horses[horses.length - 1] = givenHorse;
                }
                else {
                    let neddedHorse = horses[indexOfGivenHorse + 2];

                    horses[indexOfGivenHorse] = horses[indexOfGivenHorse + 1];
                    horses[indexOfGivenHorse + 1] = horses[indexOfGivenHorse + 2];
                    horses[indexOfGivenHorse + 2] = givenHorse;
                }
            }
            console.log(`${givenHorse} rages 2 positions ahead.`)
        }
        else if (command == 'Miracle') {
            let lastHorse = horses.shift();
            horses.push(lastHorse);

            console.log(`What a miracle - ${lastHorse} becomes first.`);
        }

        commands = input.shift().split(' ');
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