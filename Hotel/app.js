//Precio habitaciones
const standarRoomPrice = document.getElementById('standard').value;
const juniorRoomPrice = document.getElementById('junior').value;
const suitRoomPrice = document.getElementById('junior').value
const spa = document.getElementById('spa');

// Adjunta un controlador de eventos "change" al elemento checkbox
spa.addEventListener('change', function () {
    if (spa.checked) {
        console.log("hola")
    } else {
        console.log("adiós")
    }

});


