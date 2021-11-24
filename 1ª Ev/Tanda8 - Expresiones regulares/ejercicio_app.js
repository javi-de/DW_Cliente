function validarInfo(){
    campoDni= document.getElementById("txtDni").value;
    // console.log(campoDni);
    campoEmail= document.getElementById("txtEmail").value;
    // console.log(campoEmail);
    campoCP= document.getElementById("txtCP").value;
     console.log(campoCP);
    campoFecha= document.getElementById("txtFecha").value;
    //console.log(campoFecha);

    if(validarDNI(campoDni))
        document.write("<p>DNI correcto</p>");
    else
        document.write("<p style='color:red'>DNI incorrecto</p>");

    if(validarEmail(campoEmail))
        document.write("<p>Email correcto</p>");
    else
        document.write("<p style='color:red'>Email incorrecto</p>");

    if(validarCP(campoCP))
        document.write("<p>CP correcto</p>");
    else
        document.write("<p style='color:red'>CP incorrecto</p>");
    
    if(validarFecha(campoFecha))
        document.write("<p>Email correcto</p>");
    else
        document.write("<p style='color:red'>Email incorrecto</p>");
}


/******************************************************* */
function validarDNI(dni){
    letraGenerada= generarLetra(dni);

    dniSinLetra= dni.substr(0, 8);
    dniLetra= dni.substr(8, 8);

    //console.log("dni: " + dniSinLetra);
    //console.log("letra: " + dniLetra);

    var cadena= /^[0-9]{8}$/;
    if( cadena.test(dniSinLetra) && dniLetra== letraGenerada)
        return true;
    else
        return false;
}

function generarLetra(numDni){
    var arrLetras = new Array('T', 
                          'R', 'W', 'A', 'G', 'M', 
                          'Y', 'F', 'P', 'D', 'X', 
                          'B', 'N', 'J', 'Z', 'S', 
                          'Q', 'V', 'H', 'L', 'C', 
                          'K', 'E', 'T'
                        ); 

    let letraNum= parseInt(numDni)%23;
    
    let letra= arrLetras[letraNum];

    return letra;
}



/******************************************************* */
//validación: [N caracteres] @ [N caracteres] . [2 caracteres]
function validarEmail(email){
    var cadena= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(cadena.test(email))
        return true;
    else
        return false;
}

/******************************************************* */
//validacion: [5 números del 0 al 9]
function validarCP(cp){
    var cadena= /^[0-9]{5}$/;
    if( cadena.test(cp) )
        return true;
    else
        return false;
}

/******************************************************* */
//validacion: [2 digitos] / [2 digitos] / [4 digitos]
function validarFecha(fecha){
    var cadena= /^\d{2}\/\d{2}\/\d{4}$/;


    if( cadena.test(fecha) ){
        let arrDiaMesAnio= fecha.split("/");

        let dia = arrDiaMesAnio[0];
        console.log(dia);
        let mes = arrDiaMesAnio[1];
        console.log(mes);
        let anio= arrDiaMesAnio[2];
        console.log(anio);

        if(comprobarFecha(dia, mes, anio)){
            return true;
        }  
    }else{
        console.log("Error: no cumple la expresión regular");
    }
    
    return false;
}

//no se compruebas años bisiestos
function comprobarFecha(dia, mes, anio){
    if(mes< 1 || mes> 12){
        console.log("error rango mes");
        return false;
    }
    
    if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        if(dia< 1 || dia> 31){
            console.log("error rango dia (1-31)");
            return false;
        }
    }else if( mes==2){
        if(dia< 1 || dia> 28){
            console.log("error rango dia (1-28)");
            return false;
        }
    }else{
        if(dia< 1 || dia> 30){
            console.log("error rango dia (1-30)");
            return false;
        }
    }

    return true;
    
}