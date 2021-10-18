

function tipoLetras(strTexto){
    let contieneMinus= false;
    let contieneMayus= false;
    let secondWin;

    for(let cont= 0; cont< strTexto.length; cont++){
        let letra= strTexto.charAt(cont);

        if(letra=== letra.toLowerCase() && !contieneMinus){
            contieneMinus= true;
        }else if(letra=== letra.toUpperCase() && !contieneMayus){
            contieneMayus= true;
        }
    }

    let respuesta="La cadena introducida: <br>";
    if(contieneMinus)
        respuesta+= "Contiene minúsculas <br>";
    if(contieneMayus)
        respuesta+= "Contiene mayúsculas <br>";

    secondWin= window.open("", "_blank", "width=300, height= 300, top= placeHeight/2, left=placeWidth/2");
    secondWin.document.write("<p>" + respuesta + "</p>");
    secondWin.document.write("<button type='button' onClick='window.close()'>Cerrar ventana</button>");
}