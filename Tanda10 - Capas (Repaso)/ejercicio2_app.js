let posicion= 0;
let aceleracion= 1;
let intervalo;
let frenando;

/**************************************************************************** */
function arrancar(){
    frenando= false;
    intervalo= setInterval("movimiento()", 60);
    
    console.log("arrancando");
    //document.getElementById("capaCoche").style.backgroundColor= "red";

    document.getElementById("butArrancar").style.display= "none";
    document.getElementById("butParar").style.display= "inline-block";
    document.getElementById("butAcelerar").style.display= "inline-block";
    document.getElementById("butDesacelerar").style.display= "inline-block";
}

function movimiento(){
    let meta= 100;
    console.log(posicion + "/" + meta);

        if(!frenando){
            posicion= posicion + aceleracion; 
            cochazo.style.left= posicion + "%";       

            if(posicion>= meta)
                posicion= 0;
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

    document.getElementById("butArrancar").style.display= "inline-block";
    document.getElementById("butParar").style.display= "none";
    document.getElementById("butAcelerar").style.display= "none";
    document.getElementById("butDesacelerar").style.display= "none";
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