//Precio habitaciones
const standarRoomPrice = document.getElementById('standard').value;
const juniorRoomPrice = document.getElementById('junior').value;
const suitRoomPrice = document.getElementById('junior').value
const spa = document.getElementById('spa');
const selectedRoomType = document.getElementById("selectRoomType")
const selectedRoomTypeValue = selectedRoomType.value;
const selectedRoomBySize = document.getElementById('selectRoomSize')
const selectedRoomBySizeValue = selectedRoomBySize.value
console.log(selectedRoomBySizeValue);
const calcularButton = document.getElementById('calcularPrecio')
let roomPriceWithSpa = 0



spa.addEventListener('change', function () {
    if (spa.checked) {
        console.log(spa.value)
    } else {
        console.log("adiós")
    }

});
selectedRoomType.addEventListener('change', function () {
    console.log(selectedRoomType.value)
})
selectedRoomBySize.addEventListener('change', function () {
    console.log(selectedRoomBySize.value)
})

//calcular valor de habitación con spa
const priceWithSpa = () => {
    if (spa.checked) {
        console.log(Number(spa.value) + Number(selectedRoomType.value))

    }

}
//caluclar valor segun tamaño de habitación
// const priceAccordingSize = () => {
//     if ()
// }

calcularButton.addEventListener('click', priceWithSpa)