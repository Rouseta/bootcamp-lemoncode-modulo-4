function calcular() {
    // Obtener el operando del input
    const numero = document.getElementById("numero").value;

    // Obtener la operación
    const operacion = document.getElementById("operacion").value;

    // Actualizar el resultado parcial
    let resultadoParcial = 0;

    // Si no hay ningún resultado parcial, lo inicializamos con el primer número introducido
    if (resultadoParcial === 0) {
        resultadoParcial = parseFloat(numero);
    } else {
        // Aplicar la operación anterior al resultado parcial
        switch (operacion) {
            case "suma":
                resultadoParcial += parseFloat(numero);
                break;
            case "resta":
                resultadoParcial -= parseFloat(numero);
                break;
            case "multiplicacion":
                resultadoParcial *= parseFloat(numero);
                break;
            case "division":
                resultadoParcial /= parseFloat(numero);
                break;
        }
    }

    // Actualizar el resultado parcial en el DOM
    document.getElementById("resultado-parcial").innerHTML = resultadoParcial;
}

// Escuchar el evento click del botón de resultado
document.getElementById("resultado").addEventListener("click", calcular);

// Escuchar el evento click de los botones de operación
const operaciones = document.querySelectorAll(".operaciones button");
operaciones.forEach(operacion => {
    operacion.addEventListener("click", calcular);
});
