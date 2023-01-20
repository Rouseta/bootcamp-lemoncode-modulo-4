# bootcamp-lemoncode-modulo-4

Vamos a crear una calculadora sencilla. Para ello:

Como primer paso, crea 4 funciones, una para cada una de las 4 operaciones que vamos a impementar: suma, resta, multiplicación y división. Las funciones deberán tomar como entrada dos operando y devolver el resultado de aplicar la operación.
Prueba las funciones simplemente jugando con ellas y mostrando el resultado a traves de la consola.
Una vez tengas lo anterior, añade al HTML dos inputs numéricos, que serán los operandos A y B, y también 4 botones, uno por cada operación (suma, resta, multiplicación y división).
El usuario deberá rellenar los 2 inputs con sendos operandos y clickar uno de los botones. El programa debe mostrar por pantalla el resultado de la operación

Ejercicio extra
¿Has acabado pronto? ¿Tienes ganas de más? Intenta los siguiente:

Calculadora Secuencial
Repite el ejercicio de la calculadora pero esta vez hagamos una calculadora secuencial. Esto es:

Solo es necesario un único campo numérico.
Mantén los 4 botones de las 4 operaciones.
Añade un botón de igual o resultado ( "=" ).
Una calculadora secuencial funciona del siguiente modo:

El usuario introduce un primer número.
Clicka una operación.
A continuación introduce un segundo número.
Clicka de nuevo otra operación.
Y así sucesivamente... hasta que pulsa el botón de resultado.
Si te fijas, la clave de este algoritmo es ir acumulando el resultado parcial. Para ello, con cada click que el usuario hace en una operación, deberás:

Extraer el operando que hay en el input.
Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado parcial y el nuevo operando.
Almacenar la operación actual para la siguiente vez.
NOTA: Gran parte de las funciones que vimos en la calculadora básica podrían servirte aqui también.
