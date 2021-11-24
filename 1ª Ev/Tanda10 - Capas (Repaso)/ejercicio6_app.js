let arrImagenes= ["recursos_capas/paseanimales/aguila.jpg",
                  "recursos_capas/paseanimales/ballena.jpg",
                  "recursos_capas/paseanimales/flamenco.jpg",
                  "recursos_capas/paseanimales/pinguinos.jpg",
                  "recursos_capas/paseanimales/tortuga.jpg"
                ];
// recursos_capas/paseanimales/

let alto= document.getElementById("capa2").clientHeight;
console.log("Alto: "+ alto);

let interval;
let i;
let topClip;

window.onload= function() {
    i= 0;
    topClip= 0;
    restablecerImagen();
}

function crearEfecto(){
    //velocidad del efecto ***CAMBIAR PARA AÑADIR O QUITAR RAPIDEZ A LA TRANSICIÓN***
    topClip+= 2;
    //console.log(topClip);

    let txtClip= "rect(" + topClip + "px, 610px,  460px, 0px)";
    document.getElementById("capa2").style.clip= txtClip;

    if(topClip> alto + 10){
        clearInterval(interval);

        if( (i+1) < arrImagenes.length){       
            //prepararse para poner la SIGUIENTE imagen
            i++;
            restablecerImagen();
        }else
            //fin de la exposición
            console.log("FIN");
    }
}

function restablecerImagen(){
    //se prepara en la imagen2 (en la capa superior) la imagen a la que se va a aplicar el efecto
    document.getElementById("imagen2").setAttribute("src", arrImagenes[i]);
    console.log(arrImagenes[i]);
    console.log(i);

    //se prepara en imagen1 (en la capa inferior) la siguiente imagen
    if((i+1)< arrImagenes.length){
        document.getElementById("imagen1").setAttribute("src", arrImagenes[i+1]);
    }else{
        //si ya no quedan más imagenes se oculta imagen1
        document.getElementById("imagen1").style.display="none";
        document.getElementById("capa1").innerHTML="<p>FIN</p>"
    }

    topClip= 0;
    let txtClip= "rect(" + topClip + "px, 610px,  460px, 0px)";
    document.getElementById("capa2").style.clip= txtClip;
    
    interval= setInterval("crearEfecto()", 10);
}