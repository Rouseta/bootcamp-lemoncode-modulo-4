const btnSum = document.querySelector('.suma');
const btnRes = document.querySelector('.resta');
const btnMult = document.querySelector('.mult');
const btnDiv = document.querySelector('.div');
const btnEquals = document.querySelector('.equals');
let numbersInput = document.querySelector('.screen').value;
let inputTotal = document.querySelector('.total');
console.log(numbersInput)
const operations = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b,
}

const handleOPeration = (operation) => {
    return inputTotal.innerHTML = operations[operation]

}



















btnSum.addEventListener('click', handleSum);
btnRes.addEventListener('click', handleDiff);
btnMult.addEventListener('click', handleMult);
btnDiv.addEventListener('click', handleDiv);
btnEquals.addEventListener('click', handleEquals);




