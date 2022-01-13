var peticion_http;
var tipo_accion;

window.onload= function(){
    cargaSelect("tipo");
    document.getElementById("opcion1").onchange= cargaSelect;
    document.getElementById("divopcion2").style.display= "none";
    document.getElementById("divopcion3").style.display= "none";
    document.getElementById("opcion3").onchange= mostrarSeleccion;

}

function inicializa_xhr(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function cargaSelect(tipo){
    console.log("cargando...");
    if(tipo== "opcion1"){
        var datos= "tipo=opcion1&" + Math.random();
        tipo_accion= "opcion1";
    }else if(tipo== "opcion2"){
        document.getElementById("opcion2").innerHTML= "";
        var codigo= this.options[this.selectedIndex].value;
        if(codigo== 0){
            document.getElementById("divopcion2").style.display="none";
            return false;
        }else{
            document.getElementById("divopcion2").style.display="inline";
            var datos= "tipo=opcion2&id_opcion1" + encodeURIComponent(codigo) + "&nocache" + Math.random();

            tipo_accion="opcion2";
        }
    }else{
        document.getElementById("opcion3").innerHTML= "";
        var codigo= this.options[this.selectedIndex].value;
        if(codigo== 0){
            document.getElementById("divopcion3").style.display="none";
            return false;
        }else{
            document.getElementById("divopcion3").style.display="inline";
            var datos= "tipo=opcion3&id_opcion2" + encodeURIComponent(codigo) + "&nocache" + Math.random();

            tipo_accion="opcion2";
        }
    }
    
    peticion_http= inicializa_xhr();
    if(peticion_http){
        peticion_http.onreadystatechange= procesaOptions;
        peticion_http.open("POST", "combos.php");
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send(datos);
    }
}
//respuestaJSON = JSON.parse(xhr.responseText); //Aqui está el error


function procesaOptions(){
    console.log("procesando...");
    if(peticion_http.readyState== 4 & peticion_http.status== 200){
        //var parser= new DOMParser();
        //var respuesta= parser.parseFromString(peticion_http.responseText, "text/xml");
        //console.log(respuesta);
        //var elementos= eval("(" + respuesta + ")");

        var elementos= eval("(" + peticion_http.responseText + ")");
        document.getElementById(tipo_accion).options[0]= new Option("Elige una opción", 0);
        var i= 0;
        for(var codigo in elementos){
            document.getElementById(tipo_accion).options[i+1]= new Option(elementos[codigo], codigo);
            i++;
        }
    }
}

function mostrarSeleccion(){
    var info= document.getElementById("divinformacion");

    var tipo= document.getElementById("opcion1");
    var procesador= document.getElementById("opcion2");
    var disco= document.getElementById("opcion3");

    if(parseInt[tipo.value== 0] || parseInt[procesador.value== 0] || parseInt[disco.value== 0]){
        info.innerHTML="";
    }else{
        info.innerHTML="<p>Ordenador seleccionado-> tipo: " + opcion1.options[opcion1.selectedIndex].text 
                                         + ", procesador: " + opcion2.options[opcion2.selectedIndex].text
                                         + ", disco duro: " + opcion3.options[opcion3.selectedIndex].text                   
                                         + "</p>";
    }
}