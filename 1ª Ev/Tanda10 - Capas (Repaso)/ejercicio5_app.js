let topClip= 100;
let rightClip= 100;
let bottomClip= 100;
let leftClip= 100;

let ancho= document.getElementById("capa").clientWidth;
let alto= document.getElementById("capa").clientHeight;
console.log("Tamaño: " + ancho + "x" + alto);

let cont= 1;

let interval= setInterval("aparicion()", 15);
    

function aparicion(){
    console.log(cont);
    cont++;
    
    topClip--;
    rightClip++;
    bottomClip++;
    leftClip--;
    console.log(topClip + ", " + rightClip + ", " + bottomClip + ", " + leftClip);

    let txtClip= "rect(" + topClip + "px, " + rightClip + "px, " + bottomClip + "px, " + leftClip + "px)";
    document.getElementById("capa").style.clip= txtClip;

    if( (topClip< 0) || (rightClip> ancho))
        clearInterval(interval);

    
}