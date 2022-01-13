window.onload = function () {
    cargaSelect("provincia");
    document.getElementById("divmunicipio").style.display = "none";
    document.getElementById("provincia").onchange = cargaSelect;
}
function inicializa_xhr() {
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    } else if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function cargaSelect(tipo) {
    if(tipo ="provincia"){
        var datos= "tipo==provincia&" + Math.random();
        tipo_accion = "provincia"
    } else {

    }
    peticion_http = inicializa_xhr();
    if (peticion_http){
        peticion_http.onreadystatechange = procesaOptions;
        peticion_http.open("POST", "php/cargarJSON.php");
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send(datos);
    }
}

function procesaOptions() {
    if (peticion_http.readyState == 4 && peticion_http.status == 200) {
        var elementos = eval ("(" + peticion_http.responseText + ")");
        document.getElementById(tipo_accion).options[0] = new Option("Elige una opción", 0);
        var i = 0;
        for (var codigo in elementos){
            document.getElementById(tipo_accion).options[i+1] = new Option(elementos[codigo], codigo);
            i++;
        }
    }
}