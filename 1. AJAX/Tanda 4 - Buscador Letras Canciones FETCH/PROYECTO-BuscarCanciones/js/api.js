//Importamos la interfaz

import * as UI from "./interfaz.js";

class API{
    constructor(artista, cancion){
        this.artista= artista;
        this.cancion= cancion;
    }

    consultarAPI(){
        //console.log("Consultando API...");
        const url=`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta=> respuesta.json())
            .then(resultado=> {
                console.log(resultado.error);
                const{lyrics}= resultado;
                
                if(resultado.error /* resultado.error== "No lyrics found" */){
                //si resultado.error existe (está definido)
                    UI.divResultado.textContent= "";
                    UI.headingResultado.textContent= resultado.error;
                }else{
                    UI.divResultado.textContent= lyrics;
                    UI.headingResultado.textContent= `${this.cancion} de ${this.artista}`;
                }
            });
    }
}

export default API;