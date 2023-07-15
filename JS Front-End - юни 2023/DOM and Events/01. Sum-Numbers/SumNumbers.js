function calc() {
    let number1 = document.getElementById('num1');
    let number2 = document.getElementById('num2');
    let sum = document.getElementById('sum');

   
    sum.value = Number(number1.value) + Number(number2.value);
    console.log(number1.value, number2.value, sum.value)
}
