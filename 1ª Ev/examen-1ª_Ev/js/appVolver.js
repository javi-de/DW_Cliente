let butVolver;

window.onload
{
    butVolver= document.getElementById("volver");
    butVolver.addEventListener("click", volver);
}


function volver(){
    window.open("index.html", "_self");
}