function mostrarSelect(){
    let resultado= "Has seleccionado ";

    let selectProc= document.getElementById("procesadores");
    let txtProc= selectProc.options[selectProc.selectedIndex].value;
    resultado+= "el procesador " + txtProc + " con ";

            
    let selectSOs= document.getElementById("SOs");

    for (let i= 0; i< selectSOs.options.length; i++) {
        const opcion= selectSOs.options[i];
        if(opcion.selected)    
            resultado+= "el SOs " + opcion.value + ", ";
    }
       
    alert(resultado);
}