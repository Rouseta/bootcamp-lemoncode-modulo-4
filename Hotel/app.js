//Precio habitaciones
const standarRoomPrice = document.getElementById('standard').value;
const juniorRoomPrice = document.getElementById('junior').value;
const suitRoomPrice = document.getElementById('junior').value
const spa = document.getElementById('spa');
const selectedRoomType = document.getElementById("selectRoomType");
const selectedRoomBySize = document.getElementById('selectRoomSize');
const inputNumberOfNights = document.getElementById('roomNights');
const parkingNights = document.getElementById('parkingNights')




const calcularButton = document.getElementById('calcularPrecio')


let roomPriceWithSpa = 0;
let totalPrice = 0;
let finalPrice = 0;




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
const calculateFinalPrice = () => {
    const spaValue = Number(spa.value);
    const roomPriceWithSpa = spaValue + Number(selectedRoomType.value)
    const percentage = (25 / 100) * roomPriceWithSpa;
    const totalParkinPrice = parkingNights.value * inputNumberOfNights.value

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

    const finalPrice = (totalPrice) * inputNumberOfNights.value + totalParkinPrice
    console.log(finalPrice)

}


calcularButton.addEventListener('click', calculateFinalPrice);
