/*
Se debe programar el ya clásico juego de Mastermind, donde se debe
adivinar una combinación de cinco números del 0 al 9 y sus posiciones y el
ordenador debe dar una pista tal que:
- Si el número existe en la combinación: X
- Si el número existe en la combinación y la posición es correcta: O
- Si el número no existe en la combinación: -
Un ejemplo de cómo se vería la ejecución (no código) de la secuencia de
juego, siendo la combinación 12321 sería:
*/
function __main__() {
    //Arrays
    var secret = [];


    //Variables auxiliares
    var num = "";
    let contador = 0;
    

    //Array Secreto a Descubrir
    for (i = 0; i < 5; i++) {
        num = numeroRandom(1, 10);
        secret[i] = num;
    }

    salidaConsola(secret);



    do { // Seguir jugando o no;
        continuar = true;

        do {    //Programa
            var resultado = [];
            var array = [];

            contador++; //Contador para que el usuario no supere los intentos máximos.

            var comprobarPositivo = false;

            array.push(parseInt(entradaConsola("Introduce el primer número")));
            array.push(parseInt(entradaConsola("Introduce el segundo número")));
            array.push(parseInt(entradaConsola("Introduce el tercer número")));
            array.push(parseInt(entradaConsola("Introduce el cuarto número")));
            array.push(parseInt(entradaConsola("Introduce el quinto número")));


            for (i = 0; i < 5; i++) {
                if (secret.includes(array[i])) {
                    if (array[i] == secret[i]) {
                        resultado.push("+");
                    } else {
                        resultado.push("0");
                    }
                } else {
                    resultado.push("-");
                }
            }


            for (i = 0; i < 5; i++) {
                if (resultado[i] == "+") {
                    comprobarPositivo = true;
                } else {
                    comprobarPositivo = false;
                    break;
                }
            }


            if (comprobarPositivo) {
                alert("HAS ACERTADO");
                continuar = false;
            }

            if (contador == 1) {
                alert("Intento número 1:" + "\n" + array + "\n" + resultado)
            } else if (contador == 2) {
                alert("Intento número 2:" + "\n" + array + "\n" + resultado)
            } else if (contador == 3) {
                alert("Intento número 3:" + "\n" + array + "\n" + resultado)
            } else if (contador == 4) {
                alert("Intento número 4:" + "\n" + array + "\n" + resultado)
            } else if (contador == 5) {
                alert("Intento número 5:" + "\n" + array + "\n" + resultado)
                alert("Te has quedado sin intentos");
                continuar = false;
            }
        } while (continuar);




        //Para continuar jugando o no
        var continuarTotal = true;

        opcion = entradaConsola("¿Deseas seguir jugando?" +
            "\n1 - Si" +
            "\n2 - No");

        switch (opcion) {
            case 1:
            case "1":
            case "Si":
            case "si":
                break;
            default:
                continuarTotal = false;
        }



    } while (continuarTotal)



}

__main__();