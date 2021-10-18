function mostrarRadios(){
    let resultado= "Has seleccionado ";

    let arrRadioProcesadores= document.getElementsByName("procesadores");
    arrRadioProcesadores.forEach(eleRadio => {
        if(eleRadio.checked){
            resultado+= "el procesador " + eleRadio.value + " con ";
        }
    });

    let arrRadioSOs= document.getElementsByName("SOs");
    arrRadioSOs.forEach(eleRadio => {
        if(eleRadio.checked){
            resultado+= "el SO " + eleRadio.value;
        }
    });

    alert(resultado);
}