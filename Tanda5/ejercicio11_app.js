function generarNumSecreto(){
    let numSecreto;
    numSecreto= parseInt(Math.random() *(100- 1 + 1)) + 1;

    return numSecreto;
}

function empezarJuego(){
    let numSecreto= generarNumSecreto();
    let numRespuesta;
    let contIntentos= 0;
    do{
        numRespuesta= prompt("Introduce un número (entre 1 y 100): ");

        if(numRespuesta< 1 || numRespuesta> 100)
            alert("ERROR. El número está fuera de rango o no es válido");
        else{
            if(numSecreto> numRespuesta)
                alert("El número secreto es mayor que " + numRespuesta);
            else if(numSecreto< numRespuesta)
                alert("El número secreto es menor que " + numRespuesta);
        }
        contIntentos++;
    }while(numRespuesta!= numSecreto);

    alert("Enhorabuena, has acertado. Nº de intentos: " + contIntentos);
}