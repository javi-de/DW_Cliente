window.onload = function() {
    document.getElementById("aceptar").addEventListener("click", mostrar);
}

function mostrar() {

    var misdestinos = "";

    var datos = fetch('destinos.json')
        .then(respuesta => respuesta.json())
        .then(destinos => {
            console.log(destinos);

            destinos.forEach(destino => {
                misdestinos = misdestinos + destino.name + "<br>";

            });
            document.getElementById("mensaje").innerHTML = "<br>" + misdestinos;
        })
        .catch(
            document.getElementById("mensaje").innerHTML = "Fichero no existe"
        );
}