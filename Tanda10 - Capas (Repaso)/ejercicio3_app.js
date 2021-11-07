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

}