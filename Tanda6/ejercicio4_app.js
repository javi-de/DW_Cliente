// focus en el nombre
document.getElementById("txtNombre").focus();

// dni y letra
function validar(){
    var patronDni= /^[0-9]{8}$/;
    let eleDni= document.getElementById("txtDni");
    let letraDni;

    if(patronDni.test(eleDni.value)==false){
        alert("ERROR. DNI erróneo: debes introducdir los 8 dígitos de tu DNI");
        setTimeout( function(){
                        eleDni.focus();
                    }, 100 );
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
        document.getElementById("areaOpinion").placeholder= "Muy buena. Caracteres permitidos: " + numMax;  
    }
        
}

function validarNum(num){
    if(isNaN(num) || num.includes("."))
        return false;

    return true;

}

//validar que se hayan rellenado los campos: nombre, dni, clave, sexo, y provincia
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

    let campoSueldo;
    let arrSueldo=  document.getElementsByName("radioSueldo");
    arrSueldo.forEach(eleRadio => {
        if(eleRadio.checked)
        campoSueldo= eleRadio.value; 
    });

    // let campoFichero;

    let campoHobbies;
    let selectHobbies= document.getElementById("SOs");

    for (let i= 0; i< selectSOs.options.length; i++) {
        const opcion = selectSOs.options[i];
        if(opcion.selected)    
            resultado+= "el SOs " + opcion.value + ", ";
    }

    // if(campoNombre== "" || campoDni== "" || campoClave== "" ||  campoSexo== "" ||  campoProvincia== "")
    //     alert("Faltan campos obligatorios: comprueba nombre, dni, clave, sexo y provincia");
    // else{
        // console.log(campoNombre);
        // console.log(campoDni);
        // console.log(campoClave);
        // console.log(campoSexo);
        // console.log(campoProvincia);

        // console.log(campoOpinion);
        // console.log(campoNumCar);
        // console.log(campoMayorEdad);
        // console.log(campoSueldo);
        // console.log(campoFichero);
        console.log(campoHobbies);

        
        let eleContenido= document.getElementById("contenido");

        eleInformacion= document.createElement("p");
        eleInformacion.innerHTML+= "<br><strong>nombre:</strong> " + campoNombre;
        eleInformacion.innerHTML+= "<br><strong>DNI:</strong> " + campoDni;
        eleInformacion.innerHTML+= "<br><strong>Clave:</strong> " + campoClave;
        //opinion 
        //numCar
        //mayorEdad
        eleInformacion.innerHTML+= "<br><strong>Sexo:</strong> " + campoSexo;
        //sueldo
        //fichero
        eleInformacion.innerHTML+= "<br><strong>Provincia:</strong> " + campoProvincia;
        //hobbies

        eleContenido.appendChild(eleInformacion);


    // }
}