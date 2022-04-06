/*
Generar un programa que simule el clásico juego de televisión donde se
muestra un ítem, un objeto, y se debe intentar acertar o aproximarse al
precio sin pasarse. Los requerimientos son los siguientes:

    - Los ítems deben de ser objetos del tipo “Premio” con los atributos
    nombre, precio, rango_mayor y rango_menor y una función llamada
    “generadorPrecio” que genere un valor aleatorio entre el
    rango_menor y el rango_mayor para el precio de dicho ítem.

    - El juego debe generar el precio de los ítems cada vez que se quiera
    comenzar una nueva partida.

    - Al acertar o fallar, el usuario podrá decidir si volver a jugar o terminar.

*/
function __main__() {
    var continuar = true;


    do {
        //Generar premio para cada partida.
        var premio = item("Alfombra", 45, 46);
        premio.generadorPrecio();


        presentador = alert("EL PRECIO JUSTO\n-------\nAcercate lo más posible al precio del objeto en euros pero SIN PASARTE.");
        oportunidad = parseInt(entradaConsola("EL PRECIO JUSTO\n-------\nAdivina el precio de este objeto: " + premio.getNombre()));

        window.alert("EL PRECIO JUSTO\n-------\nJugando con: " + oportunidad + "€");

        if (oportunidad == premio.getPrecio()) {
            alert("EL PRECIO JUSTO\n-------\nEl precio es de: " + premio.getPrecio() + "€\n¡HAS DADO EN EL CLAVO, MUY BIEN JUGADO!");
        } else if (oportunidad < premio.getPrecio()) {
            alert("EL PRECIO JUSTO\n-------\nEl precio es de: " + premio.getPrecio() + "€\n¡Has acertado!");
        } else {
            alert("EL PRECIO JUSTO\n-------\nEl precio es de: " + premio.getPrecio() + "€\n¡Has fallado!");
        }




        opcion = entradaConsola("¿Deseas seguir jugando?" +
            "\n1 - Si" +
            "\n2 - No");

        switch (opcion) {
            case 1:
            case "1":
            case "Si":
            case "si":
            case "SI":
                break;
            case 2:
            case "2":
            case "No":
            case "no":
            case "NO":
                alert("Saliendo.");
                continuar = false;
            default:
                break;
        }


    } while (continuar)

}

__main__();