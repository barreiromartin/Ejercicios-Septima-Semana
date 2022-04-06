function numeroRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function secret(){
    var secret = [];
    var num = "";
    var resultado = "";

    for(i = 0; i < 5; i++){
        num = numeroRandom(1, 10);
        secret[i] = num;
    }

    resultado = salidaConsola(secret);

    return resultado;
}