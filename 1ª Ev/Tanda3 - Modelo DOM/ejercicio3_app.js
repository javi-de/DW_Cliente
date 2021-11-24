function anade() {
    const lista= document.getElementById("lista");
    const liNuevo= document.createElement("li");
    liNuevo.innerHTML= "Nueva linea";

    lista.appendChild(liNuevo);
}