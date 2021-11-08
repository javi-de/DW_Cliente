let posicion;
let aceleracion;
let intervalo;
let frenando;

window.onload= () =>{
    posicion= 0;
    aceleracion= 1;

    botonArrancar= document.getElementById("butArrancar");
    botonParar= document.getElementById("butParar");
    botonAcelerar= document.getElementById("butAcelerar");
    botonDesacelerar= document.getElementById("butDesacelerar");
}

/**************************************************************************** */
function arrancar(){
    frenando= false;
    intervalo= setInterval(movimiento, 60);
    
    console.log("arrancando");
    //document.getElementById("capaCoche").style.backgroundColor= "red";

    botonArrancar.style.display= "none";
    botonParar.style.display= "inline-block";
    botonAcelerar.style.display= "inline-block";
    botonDesacelerar.style.display= "inline-block";
}

function movimiento(){
    let meta= 100;
    console.log(posicion + "/" + meta);

        if(!frenando){
            posicion= posicion + aceleracion; 
            cochazo.style.left= posicion + "%";       

            if(posicion>= meta)
                posicion= -50;
        }
}

/**************************************************************************** */
function parar(){
    frenando= true;
    posicion= 0;
    cochazo.style.left= posicion + "%";
    clearInterval(intervalo);

    console.log("parando");
    //document.getElementById("capaCoche").style.backgroundColor= "white";

    botonArrancar.style.display= "inline-block";
    botonParar.style.display= "none";
    botonAcelerar.style.display= "none";
    botonDesacelerar.style.display= "none";
}

/**************************************************************************** */
function acelerar(){
    aceleracion= aceleracion + 5;
    console.log("acelerando: " + aceleracion);
}

/**************************************************************************** */
function desacelerar(){
    aceleracion= aceleracion - 5;

    if(aceleracion<= 1)
        aceleracion= 1;

    console.log("desacelerando: " + aceleracion);
}