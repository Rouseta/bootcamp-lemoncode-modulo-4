//Precio habitaciones
const standarRoomPrice = document.getElementById('standard').value;
const juniorRoomPrice = document.getElementById('junior').value;
const suitRoomPrice = document.getElementById('junior').value
const spa = document.getElementById('spa');
const selectedRoomType = document.getElementById("selectRoomType")
const selectedRoomTypeValue = selectedRoomType.value;
console.log(selectedRoomTypeValue)



spa.addEventListener('change', function () {
    if (spa.checked) {
        console.log("hola")
    } else {
        console.log("adiós")
    }

});
selectedRoomType.addEventListener('change', function () {
    console.log(selectedRoomType.value)
})


