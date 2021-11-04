function mostrarChecks(){
    let resultado="Has seleccionado la/s opcion/es: \n";

    let formulario= document.getElementById("formulario");
    
    for(let cont= 0; cont< formulario.elements.length; cont++){
        let elemento= formulario.elements[cont];

        if(elemento.type == "checkbox" && elemento.checked)
            resultado+=  "*" + elemento.value + "\n";
    }

    alert(resultado);
}