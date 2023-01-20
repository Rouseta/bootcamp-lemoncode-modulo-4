const btnSum = document.querySelector('.suma');
const btnRes = document.querySelector('.resta');
const btnMult = document.querySelector('.mult');
const btnDiv = document.querySelector('.div');
const btnEquals = document.querySelector('.equals');
let numbersInput = () => parseInt(document.querySelector('.screen').value);
let inputTotal = document.querySelector('.total');

const operations = {
    suma: '+',
    resta: '-',
    multiplicacion: '*',
    division: '/',
    igual: '='
}



const sum = (a, b) => {
    let result = a + b
    return result
}
const handleSum = () => {

    inputTotal.innerHTML = sum(inputA(), inputB())
}


const diff = (a, b) => {
    let result = a - b
    return result
}
const handleDiff = () => {
    inputTotal.innerHTML = diff(inputA(), inputB());

}


const mult = (a, b) => {
    let result = a * b
    return result
}
const handleMult = () => inputTotal.innerHTML = mult(inputA(), inputB());



const div = (a, b) => {
    const result = a / b
    return result
}

const handleDiv = () => inputTotal.innerHTML = div(inputA(), inputB());
const reset = () => {
    inputTotal = 0;
}
const handleEquals = () => {
    let res = 0;
    switch (operations) {
        case 'suma':
            res = numbersInput + numbersInput
            break;
        case 'resta':
            res = numbersInput - numbersInput
            break;
        case 'multiplicacion':
            res = numbersInput * numbersInput
            break;
        case 'division':
            res = numbersInput / numbersInput
            break;

    }
    console.log(res)
    inputTotal.innerHTML = res
}



btnSum.addEventListener('click', handleSum);
btnRes.addEventListener('click', handleDiff);
btnMult.addEventListener('click', handleMult);
btnDiv.addEventListener('click', handleDiv);
btnEquals.addEventListener('click', handleEquals);




