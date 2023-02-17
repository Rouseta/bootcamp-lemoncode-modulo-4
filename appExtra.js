const btnSum = document.querySelector('.suma');
const btnRes = document.querySelector('.resta');
const btnMult = document.querySelector('.mult');
const btnDiv = document.querySelector('.div');
const btnEquals = document.querySelector('.equals')
let input = document.querySelector('.input').value;
let inputTotal = document.querySelector('.total');



const sum = () => {

    let result = a + b
    return result
}
const handleSum = () => {

    inputTotal.innerHTML = sum()
}


const diff = (a, b) => {
    let result = a - b
    return result
}
const handleDiff = () => {
    inputTotal.innerHTML = diff();

}


const mult = (a, b) => {
    let result = a * b
    return result
}
const handleMult = () => inputTotal.innerHTML = mult();



const div = (a, b) => {
    const result = a / b
    return result
}

const handleDiv = () => inputTotal.innerHTML = div();

const equals = () => {
}
const handleEquals = () => inputTotal.innerHTML = equals()



btnSum.addEventListener('click', handleSum);
btnRes.addEventListener('click', handleDiff);
btnMult.addEventListener('click', handleMult);
btnDiv.addEventListener('click', handleDiv);
btnEquals.addEventListener('click', handleEquals);




