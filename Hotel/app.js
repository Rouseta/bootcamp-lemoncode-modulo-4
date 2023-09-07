//Precio habitaciones
const standarRoomPrice = document.getElementById('standard').value;
const juniorRoomPrice = document.getElementById('junior').value;
const suitRoomPrice = document.getElementById('junior').value
const spa = document.getElementById('spa');
let selectedRoomType = document.getElementById("selectRoomType");
let selectedRoomBySize = document.getElementById('selectRoomSize');
let inputNumberOfNights = document.getElementById('roomNights');
let parkingNights = document.getElementById('parkingNights')
let displayFinalPrice = document.getElementById('displayFinalPrice')




const calcularButton = document.getElementById('calcularPrecio')


let roomPriceWithSpa = 0;
let totalPrice = 0;
let finalPrice = 0;




spa.addEventListener('change', function () {
    if (spa.checked) {
        console.log(spa.value)
    } else {
        console.log(" ")
    }

});
selectedRoomType.addEventListener('change', function () {
    console.log(selectedRoomType.value)
})
selectedRoomBySize.addEventListener('change', function () {
    console.log(selectedRoomBySize.value)
})
const renderFinalPrice = () => {
    return displayFinalPrice.innerHTML = `<p>Precio a pagar: ${finalPrice} euros</p>`


}

//calcular valor de habitación/noche
const calculateFinalPrice = () => {
    const spaValue = Number(spa.value);
    const roomPriceWithSpa = spaValue + Number(selectedRoomType.value)
    const percentage = (25 / 100) * roomPriceWithSpa;
    const totalParkinPrice = parkingNights.value * 10

    switch (selectedRoomBySize.value) {
        case "triple":
            totalPrice = percentage + roomPriceWithSpa;
            break;
        case "individual":
            totalPrice = roomPriceWithSpa - percentage;
            break;
        default:
            totalPrice = roomPriceWithSpa;
    }

    finalPrice = (totalPrice) * inputNumberOfNights.value + totalParkinPrice

    renderFinalPrice()

}


calcularButton.addEventListener('click', calculateFinalPrice);
