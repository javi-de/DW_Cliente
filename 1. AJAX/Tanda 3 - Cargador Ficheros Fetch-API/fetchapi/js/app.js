function loadTxt(){
    fetch('datos.txt')
        .then( response => response.text() )
        .then ( resultText => {
            document.getElementById("resultado").innerHTML= resultText;
        })
        .catch( err => console.log(err) );
}

function loadJSON() {
    var empleados = "<ol>";

    fetch('empleados.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            //console.log(datos);
            
            datos.forEach(datos => {
                empleados += "<li>" + datos.nombre + " - " + datos.puesto + "</li>";

            });

            empleados+="</ol>";
            document.getElementById("resultado").innerHTML= "<br>" + empleados;
        })
        .catch(
            document.getElementById("resultado").innerHTML= "Fichero no existe"
        );
}

function loadAPI(){
    const url= "https://picsum.photos/list";
    fetch(url)
            .then(respuestas => respuestas.json())
            .then(respuestas => insertarDatosEnHtml(respuestas))
            .catch(
                document.getElementById("resultado").innerHTML= "LA API no existe"
            );
}

function insertarDatosEnHtml(respuestas) {
    var infoAutorImg= "";

    console.log(respuestas);
    console.log("IMAGENES");
    //console.log(respuestas.post_url);

    respuestas.forEach(respuesta => {
        if(respuesta.width>5500)
            infoAutorImg+= "<a href='" + respuesta.post_url + "'>Ver imagen</a> - " + respuesta.author + "<br>";

    });

    document.getElementById("resultado").innerHTML= "<br>" + infoAutorImg;
}