let eleDni;
let eleNombre;
let eleApellidos;
let eleDireccion;
let eleTerritorio;
let eleProvincia;
let eleFecha;
let eleEmail;
let eleTelefono;
let eleCheck;
let butEnviar;



let storage;

let arrTerritorios = {"euskadi" : ["Araba", "Bizkaia", "Gipuzkoa"],
                  "nafarroa" : ["Navarra"],
                  "iparralde" : ["Lapurdi", "Behe Nafarroa", "Zuberoa"]
                 }

let arrMunicipios={
                  "Araba" : ["Gasteiz", "Laguardia", "Salvatierra"],
                  "Bizkaia" : ["Bilbo", "Barakaldo", "Durango"],
                  "Gipuzkoa" : ["Donosti", "Arrasate","Bergara"],
                  "Navarra" : ["Iruña", "Lizarra", "Ujue"],
                  "Lapurdi" : ["Baiona", "Biarritz", "Hendaya"],
                  "Behe Nafarroa" : ["Bidarray","St-Palais"],
                  "Zuberoa" : ["Maule","Etxarri"]
                }

window.onload
{
    storage= window.localStorage;
    //storage.clear();

    eleDni= document.getElementById("dni");
    eleNombre= document.getElementById("firstname");
    eleApellidos= document.getElementById("lastname");
    eleDireccion= document.getElementById("address");
    eleTerritorio= document.getElementById("territorio");
    eleProvincia= document.getElementById("provincia");
    eleFecha= document.getElementById("birthday");
    eleEmail= document.getElementById("email");
    eleTelefono= document.getElementById("phone");
    eleCheck= document.getElementById("politicas");
    butEnviar= document.getElementById("enviar");
    butVolver= document.getElementById("volver");

    //eleDni.focus();
    eventos();
}

function eventos(){
    //creacion de listener para validaciones
    eleDni.addEventListener("blur", validadDni);
    eleNombre.addEventListener("blur", validarNombreyAp);
    eleApellidos.addEventListener("blur", validarNombreyAp);
    eleDireccion.addEventListener("blur", validarDireccion);
    eleTerritorio.addEventListener("blur", fijarTerritorio);
    eleProvincia.addEventListener("blur", fijarProvincia);
    eleFecha.addEventListener("blur", validarFecha);
    eleEmail.addEventListener("blur", validarEmail);
    eleTelefono.addEventListener("blur", validarTelefono);
    eleCheck.addEventListener("click", habilitarBoton);

    butEnviar.addEventListener("click", enviarInfo);
}

/************ validaciones dni, nombre, apellidos y direccion ************/
function validadDni(){
    var patronDni= /^[0-9]{8}[A-Z]{1}$/;
    if(!patronDni.test(eleDni.value)){
        alert("ERROR. DNI erróneo: debes introducdir los 8 dígitos y la letra de tu DNI");
        //setTimeout( function(){eleDni.focus();}, 100 );
        eleDni.value="";
    }
}

function validarNombreyAp(fuente){
    let txtFuente= fuente.target.value;
    console.log(txtFuente);

    var patronNom= /^[A-Za-z]+$/

    if(!patronNom.test(txtFuente) || txtFuente.length> 50){
        alert("ERROR. Dirección errónea: solo se permiten letras y no más de 50 caracteres en total");
        //setTimeout( function(){fuente.target.focus();}, 100 );
        fuente.target.value="";
    }
}

function validarDireccion(){

    if(eleDireccion.value.length> 50){
        alert("ERROR. Dirección errónea: no más de 50 caracteres en total");
        //setTimeout( function(){eleDireccion.focus();}, 100 );
        eleDireccion.value= "";
    }
}

/****************** territorio, provincia, municipio ******************** */
function fijarTerritorio(){
    let territorio= eleTerritorio.options[eleTerritorio.selectedIndex].value;
    console.log(territorio);

    mostrarProvincias(territorio);
}

function mostrarProvincias(territorio){
    //resetear contenido primero **
    if(territorio!= 0){
        let arrProvSelec= arrTerritorios[territorio];
        
        arrProvSelec.forEach(nombreProv => {
            let opcion= document.createElement("option");
            opcion.innerHTML= nombreProv;
            opcion.setAttribute("value", nombreProv);
            eleProvincia.appendChild(opcion);  
        });
    }else{
        eleProvincia.clear();
    }
}

function fijarProvincia(){
    let provincia= eleProvincia.options[eleProvincia.selectedIndex].value;
    console.log(provincia);

    mostrarMunicipios(provincia);
}

function mostrarMunicipios(provincia){
    //resetear contenido primero **
    let arrMuniSelec= arrMunicipios[provincia];
        
        arrMuniSelec.forEach(nombreMuni => {
            let opcion= document.createElement("option");
            opcion.innerHTML= nombreMuni;
            opcion.setAttribute("value", nombreMuni);
            document.getElementById("municipio").appendChild(opcion);  
        });
}

/************************* fecha de nacimiento ************************ */
function validarFecha(){
    let fecha= eleFecha.value;
    console.log(fecha);

    var cadena= /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;

    if( !cadena.test(fecha) ){
       alert("Error: fecha no válida. Imposible calcular la edad");
    }else{
        let arrDiaMesAnio= fecha.split("-");

        let dia = arrDiaMesAnio[2];
        //console.log(dia);
        let mes = arrDiaMesAnio[1];
        //console.log(mes);
        let anio= arrDiaMesAnio[0];
        //console.log(anio);

        if(comprobarFecha(dia, mes, anio)){
            guardarEdad();
            alert("Edad guardada");
        }  
    }
}

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

function guardarEdad(){
    arrNacimiento= eleFecha.value.split("-");

    let anio= arrNacimiento[0];
    console.log(anio);

    let anioActual= new Date().getFullYear()+"";
    console.log(anioActual);

    let edad= anioActual - anio;
    console.log(edad + " años");
    storage.setItem("edad", JSON.stringify(edad));
}





/********************* validar email **********************/
function validarEmail(){
    let email= eleEmail.value;

    var cadena= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!cadena.test(email)){
        alert("ERROR. Email en formato incorrecto.");
        eleEmail.value= "";
    }
}



/************************* calidar tlf ********************************/
function validarTelefono(){
    let telefono= eleTelefono.value;
    console.log(telefono);

    let patron1= /^[6|9]{1}\d{8}$/;
    let patron2= /^\(\+\d{2}\)[6|9]{1}\d{8}$/;

    if(!patron1.test(telefono) && !patron2.test(telefono)){
        alert("ERROR. Teléfono en formato incorrecto.");
        eleTelefono.value="";
    }
}



/****************************** checkbox ******************************** */
function habilitarBoton(){
    if(eleCheck.checked){
        document.getElementById("enviar").removeAttribute("disabled");
    }else{
        document.getElementById("enviar").setAttribute("disabled", "disabled");
    }
}



/************************** JSON local Storage *********************** */
//ver storage
//console.log(JSON.parse(storage.getItem("edad")));





/******************************** ir a thankyou.html y volver ************************************** */
function enviarInfo(){
    window.open("thankyou.html", "_self");
}