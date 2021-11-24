const arrRutasImgs= ["./images/0.jpg",
                     "./images/1.jpg",
                     "./images/2.jpg",
                     "./images/3.jpg",
                     "./images/4.jpg",
                     "./images/5.jpg",
                     "./images/6.jpg",
                     "./images/7.jpg",
                     "./images/8.jpg",
                     "./images/9.jpg"
                    ]



setInterval( function(){ 
                         dimeLaFecha();
                        }, 1000
            );

/*
function dimeLaHora(){
    let horaActual = new Date().toLocaleTimeString(); 
    let arrHoraActual= horaActual.split(":");

    let hora= arrHoraActual[0];
    let min= arrHoraActual[1];
    let sec= arrHoraActual[2];
//CALCULO HORAS
    let arrHoras= document.getElementsByClassName("hora");

    let horaDecena= Math.trunc(hora/10);
    let horaUnidad= hora%10;

    //console.log(horaDecena + " " +  horaUnidad);
    arrHoras[0].querySelector("img").setAttribute("src", arrRutasImgs[horaDecena]);
    arrHoras[1].querySelector("img").setAttribute("src", arrRutasImgs[horaUnidad]);

CALCULO MINUTOS
    let arrMins= document.getElementsByClassName("minutos");

    let minDecena= Math.trunc(min/10);
    let minUnidad= min%10;

    //console.log(minDecena + " " +  minUnidad);
    arrMins[0].querySelector("img").setAttribute("src", arrRutasImgs[minDecena]);
    arrMins[1].querySelector("img").setAttribute("src", arrRutasImgs[minUnidad]);

//CALCULO SEGUNDOS
    let arrSecs= document.getElementsByClassName("segundos");

    let secDecena= Math.trunc(sec/10);
    let secUnidad= sec%10;

    //console.log(secDecena + " " +  secUnidad);
    arrSecs[0].querySelector("img").src= arrRutasImgs[secDecena];
    arrSecs[1].querySelector("img").src= arrRutasImgs[secUnidad];
}*/



function dimeLaFecha(){
    let horaActual= new Date().getHours()+"";
    let minutosActual= new Date().getMinutes()+"";
    let segundosActual= new Date().getSeconds()+"";
    //console.log(horaActual + ":" + minutosActual + ":" + seguindosActual);

    calcularFecha(horaActual, "hora");
    calcularFecha(minutosActual, "minutos");
    calcularFecha(segundosActual, "segundos");

    let diaActual= new Date().getDate()+"";
    let mesActual= new Date().getMonth()+1+"";
    let anioActual= new Date().getFullYear()+"";
    //console.log(diaActual + "/" + mesActual + "/" + anioActual);
    
    calcularFecha(diaActual, "dia");
    calcularFecha(mesActual, "mes");
    calcularFecha(anioActual, "anio");
}

function calcularFecha(numActual, strId){
    if(numActual < 10)
        numActual= "0" + numActual;

    let array= document.getElementsByClassName(strId);
    
    for(let cont= 1; cont<= array.length; cont ++){
        let indice= numActual[cont-1];
        array[cont-1].querySelector("img").src= arrRutasImgs[indice];
    }
}