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
function validarEmail(email){
    var cadena= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(cadena.test(email))
        return true;
    else
        return false;
}

/******************************************************* */
function validarCP(cp){
    var cadena= /^[0-9]{5}$/;
    if( cadena.test(cp) )
        return true;
    else
        return false;
}

/******************************************************* */
function validarFecha(fecha){
    if(fecha!=""){
        let arrDiaMesAnio= fecha.split("/");

        if(arrDiaMesAnio.length== 3){
            let dia = arrDiaMesAnio[0];
            console.log(dia);
            let mes = arrDiaMesAnio[1];
            console.log(mes);
            let anio= arrDiaMesAnio[2];
            console.log(anio);

            if(comprobarFecha(dia, mes, anio)){
                return true;
            }  
        }
    }

    return false;
}

function comprobarFecha(dia, mes, anio){
    if(dia.includes(".") || mes.includes(".") || anio.includes(".")){
        //console.log("error punto");
        return false;
    }
    if(dia.length!= 2 || mes.length!= 2 || anio.length!= 4){
        //console.log("error length");
        return false;
    }

    if(mes<1 || mes >12){
        //console.log("error rango mes");
        return false;
    }

    if(dia<1 || dia >31){
        //console.log("error rango dia");
        return false;
    }

    return true;
    
}