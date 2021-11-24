let placeHeight= window.screen.height;
let placeWidth= window.screen.width;

let secondWin;

function openWindow(){
    let valueName= document.getElementById('nombre').value;
    if(valueName==""){
        alert("Introduce tu nombre y apellidos");
    }else{
        secondWin= window.open("", "_blank", "width=300, height= 300, top= placeHeight/2, left=placeWidth/2");
        secondWin.document.write("<p>Bienvenido " + valueName + "</p>");
        secondWin.document.write("<button type='button' onClick='window.opener.closeWindow()'>Empezar a navegar</button>");
    }
}

function closeWindow(){
    secondWin.close();
    window.open("http://www.google.es", "_self");
}