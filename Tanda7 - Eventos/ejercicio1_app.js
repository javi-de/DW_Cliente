let arrContenidos= [];
let arrEnlaces= [];

window.onload
{
    arrContenidos= document.getElementsByTagName("p");
    arrEnlaces= document.getElementsByTagName("a");
    eventos();
}

function eventos(){
    for(let i= 0; i< arrEnlaces.length; i++){
        arrEnlaces[i].addEventListener("click", listener_enlace);
    }
}

function listener_enlace(){
    let enlace= this;
    //console.log(enlace);
    let num= enlace.id.substr(enlace.id.indexOf("_")+1);
    //console.log(num);

    let contenidoAsociado= buscarContenidoAsociado(num);

    if(this.text=="Ocultar contenidos"){
        contenidoAsociado.style.display="none";
        this.text= "Mostrar contenidos";
    }else{
        contenidoAsociado.style.display="block";
        this.text= "Ocultar contenidos";
    }
}

function buscarContenidoAsociado(num){
    for(let i= 0; i< arrContenidos.length; i++){
        let idContenido= arrContenidos[i].id;
        let numero= idContenido.substr(idContenido.indexOf("_")+1);

        if(num== numero){
            //console.log(arrContenidos[i]);
            return arrContenidos[i];
        }
    }
}
