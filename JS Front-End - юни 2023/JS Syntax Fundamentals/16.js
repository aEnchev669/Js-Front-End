function solve(array, searchedWord) {
    let words = array.split(' ');
    let count = 0;

    for (const word of words) {
        if (word == searchedWord) {
            count++;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence',
    'is');