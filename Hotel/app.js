//Precio habitaciones
const standarRoomPrice = document.getElementById('standard').value;
const juniorRoomPrice = document.getElementById('junior').value;
const suitRoomPrice = document.getElementById('junior').value
//SPA
window.onload = function () {
    const spa = document.getElementById('spa');
    if (spa.checked) {
        console.log('Checkbox seleccionado');
    } else {
        console.log('Checkbox no seleccionado');
    }
};
