function evenOrOdd(arr) {
    let num;
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        num = Number(arr[i]);

        if (num % 2 == 0) {
            evenSum += num;
        }
        else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}

evenOrOdd([2, 4, 6, 8, 10])