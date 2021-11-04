function validarInfo(){
    campoDni= document.getElementById("txtDni").value;
    // console.log(campoDni);
    // if(validarDNI(campoDni))
    //     document.write("<p>DNI correcto</p>");
    // else
    //     document.write("<p style='color:red'>DNI incorrecto</p>");

    campoEmail= document.getElementById("txtEmail").value;
    // console.log(campoEmail);
    // if(validarEmail(campoEmail))
    //     document.write("<p>Email correcto</p>");
    // else
    //     document.write("<p style='color:red'>Email incorrecto</p>");

    campoCP= document.getElementById("txtCP");
    // console.log(campoCP);
    // if(validarCP(campoCP)){
    //     document.write("<p>CP correcto</p>");
    // }else{
    //     document.write("<p style='color:red'>CP incorrecto</p>");
    // }
    
    campoFecha= document.getElementById("txtFecha").value;
    console.log(campoFecha);
    validarFecha(campoFecha);
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
    if(!fecha.includes("/", 2) || !fecha.includes("/", 5))
        console.log("cagaste");

    let arrDiaMesAnio= fecha.split("/");
    let dia = parseInt(arrDiaMesAnio[0]);
    let mes = parseInt(arrDiaMesAnio[1]);
    let anio= parseInt(arrDiaMesAnio[2]);



    98aS978Das978s9f78a9d7s8f97as8978fasasf978fas978fas
    if(!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(anio))
        return false;
    
    if( (dia< 1 || dia > 31) || (mes< 1 || mes > 12))
        return false;
    

        9879879879as8d7a9s8d79a8s7d98as7d98as7d987as9d87as98d7as98d79as87
    if(anio.length()< 4 || anio.length> 4)
        return false;
            
}