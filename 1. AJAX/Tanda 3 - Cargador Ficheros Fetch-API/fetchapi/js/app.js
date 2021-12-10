function loadTxt(){
    fetch('datos.txt')
        .then( response => response.text() )
        .then ( resultText => {
            document.getElementById("resultado").innerHTML= resultText;
        })
        .catch( err => console.log(err) );
}

function loadJSON() {
    var empleados = "";

    fetch('empleados.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            //console.log(datos);

            datos.forEach(datos => {
                empleados += datos.nombre + " - " + datos.puesto + "<br>";

            });
            document.getElementById("resultado").innerHTML= "<br>" + empleados;
        })
        .catch(
            document.getElementById("resultado").innerHTML= "Fichero no existe"
        );
}

function loadAPI(){
    fetch("https://picsum.photos/list")
            .then(respuestas => respuestas.json())
            .then(respuestas => insertarDatosEnHtml(respuestas))
}

function insertarDatosEnHtml(respuestas) {
    var infoAutorImg= "";

    console.log(respuestas);
    console.log("IMAGENES");
    //console.log(respuestas.post_url);

    respuestas.forEach(respuesta => {
        if(respuesta.width>5500)
            infoAutorImg+= respuesta.author + " - <a href='" + respuesta.post_url + "'>Ver imagen</a><br>";

    });

    document.getElementById("resultado").innerHTML= "<br>" + infoAutorImg;
}