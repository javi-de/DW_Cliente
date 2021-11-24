var arrLetras = new Array('T', 
                          'R', 'W', 'A', 'G', 'M', 
                          'Y', 'F', 'P', 'D', 'X', 
                          'B', 'N', 'J', 'Z', 'S', 
                          'Q', 'V', 'H', 'L', 'C', 
                          'K', 'E', 'T'
                        ); 

function validarDNI(dni){

    var patronDNI= /^[0-9]{8}[A-Z]{1}$/;
    
    if(patronDNI.test(dni)){
        let numero= dni.substr(0, 8);
        let letra= dni.substr(8);

        //console.log(numero);
        //console.log(letra);

        let letraValidada= parseInt(numero)%23;
        //console.log(letraValidada);
    
        if(letra== arrLetras[letraValidada]){
            alert("DNI correcto");
        }else{
            alert("Letra incorrecta");
        }
    }else{
        alert("DNI incorrecto");
    }
}

//validarDNI("77577736R");
//validarDNI("72829462J");
