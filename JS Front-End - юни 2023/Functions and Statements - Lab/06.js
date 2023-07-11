function solve(num1, num2, num3) {

    let sum = num1 * num2 * num3;

    if (sum < 0) {
        console.log('Negative')
    }
    else {
        console.log('Positive')
    }
}







function solve2(num1, num2, num3) {

    let belowZero = 0;
    if (num1 < 0) {
        belowZero++;
    }
     if (num2 < 0) {
        belowZero++;
    }
     if (num3 < 0) {
        belowZero++;
    }

    if (belowZero % 2 == 0){
        console.log('Positive')
    }
    else{
        console.log('Negative')
    }
}
solve2(1, 2, -21);
solve2(-21, 1, 2);
solve2(2, -1, -1);