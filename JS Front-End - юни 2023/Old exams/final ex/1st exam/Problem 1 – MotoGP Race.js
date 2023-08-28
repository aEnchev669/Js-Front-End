function solve(input) {
    let n = input.shift();

    let riders = [];
    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split('|');

        let name = tokens[0];
        let fuel = Number(tokens[1]);
        let position = Number(tokens[2]);

        let rider = {
            name: name,
            fuel: fuel,
            position: position,
        };

        riders.push(rider);
    }

    let commands = input.shift();
    while (commands != 'Finish') {

        let tokens = commands.split(' - ');
        let command = tokens[0];

        if (command == 'StopForFuel') {

            let rider = tokens[1];
            let minimumFuel = Number(tokens[2]);
            let changePosition = Number(tokens[3]);

            let givenRider = riders.find(r => r.name == rider)
            if (givenRider) {
                if (givenRider.fuel < minimumFuel) {
                    // let neededRider = riders.find(r => r.position = changePosition);


                    // neededRider.position = givenRider.position;
                    givenRider.position = changePosition;

                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changePosition}.`);
                }
                else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
            }
        }

        else if (command == 'Overtaking') {
            let rider1 = tokens[1];
            let rider2 = tokens[2];

            let givenRider1 = riders.find(r => r.name == rider1)
            let givenRider2 = riders.find(r => r.name == rider2)

            if (givenRider1 && givenRider2) {
                if (givenRider1.position < givenRider2.position) {

                    let position1 = givenRider1.position;
                    let position2 = givenRider2.position;

                    givenRider1.position = position2;
                    givenRider2.position = position1;

                    console.log(`${rider1} overtook ${rider2}!`)
                }
            }
        }

        else if (command == 'EngineFail') {
            let rider = tokens[1];
            let lapsLeft = tokens[2];

            let givenRider = riders.find(r => r.name == rider)

            if (givenRider) {
                let index = riders.indexOf(givenRider);

                riders.splice(index, 1);

                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            }
        }

        commands = input.shift();
    }

    riders.forEach(rider => {
        console.log(rider.name);
        console.log(`  Final position: ${rider.position}`);
    });

}

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

);