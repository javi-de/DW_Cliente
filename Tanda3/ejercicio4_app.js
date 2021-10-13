const eleBut= document.getElementById("but");
eleBut.onclick = () => {
    const eleInputDcha= document.getElementById("txtDcha");
    const eleInputIzq= document.getElementById("txtIzq");

    eleInputDcha.value= eleInputIzq.value;
    eleInputIzq.value= "";
}