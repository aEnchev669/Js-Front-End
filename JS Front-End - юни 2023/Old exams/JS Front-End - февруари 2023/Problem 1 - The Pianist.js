function painist(input) {
    let n = Number(input.shift());

    let pieceCollection = {};




    for (let i = 0; i < n; i++) {
        const [piece, composer, key] = input.shift().split('|');
        pieceCollection[piece] = { composer, key };
    }

    function addPiece(piece, composer, key) {
        if (pieceCollection[piece]) {
            console.log(`${piece} is already in the collection!`)
        }
        else {
            pieceCollection[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function removePiece(givenPiece) {
        if (!(pieceCollection[givenPiece])) {
            console.log(`Invalid operation! ${givenPiece} does not exist in the collection.`)
        }
        else {
            delete pieceCollection[givenPiece];
            console.log(`Successfully removed ${givenPiece}!`);
        }
    }

    function changeKey(givenPiece, givenKey) {
        if (!(pieceCollection[givenPiece])) {
            console.log(`Invalid operation! ${givenPiece} does not exist in the collection.`)
        }
        else {
            pieceCollection[givenPiece].key = givenKey;
            console.log(`Changed the key of ${givenPiece} to ${givenKey}!`)
        }
    }
    let commands = input.shift().split('|');
    while (commands[0] != 'Stop') {
        let command = commands[0];
        let givenPiece = commands[1];


        if (command == 'Add') {
            let givenComposer = commands[2];
            let givenKey = commands[3];
            addPiece(givenPiece, givenComposer, givenKey);
        }
        else if (command == 'Remove') {
            removePiece(givenPiece);
        }
        else if (command == 'ChangeKey') {
            let givenKey = commands[2];
            changeKey(givenPiece, givenKey);
        }

        commands = input.shift().split('|');
    }

    for (const piece in pieceCollection) {
        const composer = pieceCollection[piece].composer;
        const key = pieceCollection[piece].key;
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}


painist(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop'])


