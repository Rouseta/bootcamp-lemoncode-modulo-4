const btnSum = document.querySelector('.suma');
const btnRes = document.querySelector('.resta');
const btnMult = document.querySelector('.mult');
const btnDiv = document.querySelector('.div');
let inputA = () => parseInt(document.querySelector('.a').value);
let inputB = () => parseInt(document.querySelector('.b').value);
let inputTotal = document.querySelector('.total');
console.log(inputA)





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



btnSum.addEventListener('click', handleSum);
btnRes.addEventListener('click', handleDiff);
btnMult.addEventListener('click', handleMult);
btnDiv.addEventListener('click', handleDiv);




