//arrImagenes= ["ancares.jpg", "basel.jpg", "cabra.jpg", "madridbanco.jpg"];

window.onload= function() {
    arrEnlaces= document.getElementsByTagName("a");
    establecerListeners();
}

function establecerListeners(){
    for(let i= 0; i< arrEnlaces.length; i++){
        arrEnlaces[i].addEventListener("click", listener_enlace);
    }
}

function listener_enlace(){
    let nombreImagen= this.id;
    mostrarImagen(nombreImagen);
}

function mostrarImagen(nombreImagen){
    let imagen= document.getElementById("imagen");
    let url= "recursos_capas/" + nombreImagen + ".jpg";
    imagen.setAttribute("src", url);

    document.getElementById("capaImagen").appendChild(imagen);
    aparecer();
}



/*************EJERCICIO 4 */
let capa;
let posicion;
let intervalo;

function aparecer(){
    console.log("arrancando");
    
    capa= document.getElementById("capaImagen");
    posicion= 0;
    intervalo= setInterval("movimiento()", 40);
}

function movimiento(){
    console.log("posicion: " + posicion);

    if(posicion== 40){
        clearInterval(intervalo);
    }else{
        posicion++;
        document.getElementById("capaImagen").style.left= posicion + "%";
    }
}