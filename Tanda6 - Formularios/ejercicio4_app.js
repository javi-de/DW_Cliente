// focus en el nombre
document.getElementById("txtNombre").focus();

// dni y letra
function validar(){
    var patronDni= /^[0-9]{8}$/;
    let eleDni= document.getElementById("txtDni");
    let letraDni;

    if(patronDni.test(eleDni.value)==false){
        alert("ERROR. DNI erróneo: debes introducdir los 8 dígitos de tu DNI");
        setTimeout( function(){eleDni.focus();}, 100 );
    }else{
        letraDni= generarLetra(eleDni.value);
        document.getElementById("txtLetra").value=letraDni;
        document.getElementById("txtLetra").style.backgroundColor= "green";
    }
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

// textarea y num. max. de caracteres
function establecerMaxLength(numMax){
    if(!validarNum(numMax))
        alert("No has introducido una cantidad válida");
    else{
        // console.log(numMax);
        document.getElementById("areaOpinion").setAttribute("maxlength", numMax);
        document.getElementById("areaOpinion").placeholder= "Caracteres permitidos: " + numMax;  
    }     
}

function validarNum(num){
    if(isNaN(num) || num.includes("."))
        return false;

    return true;

}

//validar que se hayan rellenado los campos: nombre, dni, clave, sexo y provincia 
//y mostrar toda la información rellenada
function mostrarInfo(){
    //campos obligatorios
    let campoNombre= document.getElementById("txtNombre").value;
    
    let campoNumero=  document.getElementById("txtDni").value;
    let campoLetra= document.getElementById("txtLetra").value;
    let campoDni= campoNumero + campoLetra;

    let campoClave=  document.getElementById("txtPass").value;
  
    let campoSexo;
    let arrSexo=  document.getElementsByName("radioSexo");
    arrSexo.forEach(eleRadio => {
        if(eleRadio.checked)
        campoSexo= eleRadio.value; 
    });

    let selectProv= document.getElementById("provincia");
    let campoProvincia= selectProv.options[selectProv.selectedIndex].value;


    //campos no obligatorios
    let campoOpinion= document.getElementById("areaOpinion").value;
    let campoNumCar= document.getElementById("txtNumCar").value;
    
    let campoMayorEdad;
    let mayorEdad= document.getElementById("chkEdad");
    if(mayorEdad.checked)
        campoMayorEdad= "SI";
    else
        campoMayorEdad= "NO";

    let campoSueldo="";
    let arrSueldo= document.getElementsByName("radioSueldo");
    arrSueldo.forEach(eleRadio => {
        if(eleRadio.checked)
        campoSueldo= eleRadio.value; 
    });

    // let campoFichero;

    let campoHobbies="";
    let selectHobbies= document.getElementById("hobbies");
    for (let i= 0; i< selectHobbies.options.length; i++) {
        const opcion= selectHobbies.options[i];
        if(opcion.selected)
            campoHobbies+= opcion.value + "  ";
    }
    
    if(campoNombre== "" || campoDni== "" || campoClave== "" ||  campoSexo== "" ||  campoProvincia== "")
        alert("Faltan campos obligatorios: comprueba nombre, dni, clave, sexo y provincia");
    else{
        //console.log(campoNombre);
        //console.log(campoDni);
        //console.log(campoClave);
        //console.log(campoSexo);
        //console.log(campoProvincia);
        
        //console.log(campoOpinion);
        //(no es necesario)console.log(campoNumCar);
        //console.log(campoMayorEdad);
        //console.log(campoSueldo);
        //console.log(campoFichero);
        //console.log(campoHobbies);

        let eleInfo= document.getElementById("info");

        //cada vez que se pulsa el boton Enviar se crea el div "contenido" para SOBRESCRIBIR los datos
        let eleContenido= document.createElement("div");
        eleContenido.setAttribute("id", "contenido");

        let eleTitulo= document.createElement("h2");
        eleTitulo.innerHTML= "Datos Formulario";

        let eleInformacion= document.createElement("p");

        eleInformacion.innerHTML= "";

        /***/eleInformacion.innerHTML+= "<br><strong>Nombre:</strong> " + campoNombre;       
        /***/eleInformacion.innerHTML+= "<br><strong>DNI:</strong> " + campoDni;        
        /***/eleInformacion.innerHTML+= "<br><strong>Clave:</strong> " + campoClave;
        if(campoOpinion!="")
            eleInformacion.innerHTML+= "<br><strong>Opinion:</strong> " + campoOpinion;
        eleInformacion.innerHTML+= "<br><strong>Mayor de edad:</strong> " + campoMayorEdad;
        /***/eleInformacion.innerHTML+= "<br><strong>Sexo:</strong> " + campoSexo;
        eleInformacion.innerHTML+= "<br><strong>Sueldo:</strong> " + campoSueldo;
        //fichero
        /***/eleInformacion.innerHTML+= "<br><strong>Provincia:</strong> " + campoProvincia;
        if(campoHobbies!="")
            eleInformacion.innerHTML+= "<br><strong>Hobbies:</strong> " + campoHobbies;

        eleContenido.appendChild(eleTitulo);
        eleContenido.appendChild(eleInformacion);

        eleInfo.appendChild(eleContenido);
    }
}

function borrarCaja(){
    let eleContenido= document.getElementById("contenido");
    eleContenido.remove();
}