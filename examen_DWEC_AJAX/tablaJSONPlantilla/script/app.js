let edadMax;
let nombreEdadMax;
let salarioMin;
let nombreSalarioMin;
let sumaEdades;
let contEdades;

let boton;
let salarioSeleccionado;



window.onload= function(){
    sumaEdades= 0;
    contEdades= 4;
    salarioMin= 50000;
    edadMax= 0;
    salarioSeleccionado= 0;

    boton= document.getElementById("butSalario");
    boton.addEventListener("click", recogerSalario);
    boton.addEventListener("click", loadJSON);


    loadJSON();
}

function recogerSalario(){
    salarioSeleccionado= document.getElementById("salarioMinimo").value;

    if( isNaN(salarioSeleccionado) || salarioSeleccionado==""){
        salarioSeleccionado= 0;
    }

    console.log("salario selec.2: " + parseFloat(salarioSeleccionado) );

}

function loadJSON() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var JSONObject = JSON.parse(xhr.responseText);
            //console.log(JSONObject);

            contEdades= 0;

            eleTabla= document.getElementById("tabla");

            eleEstadisticas= document.getElementById("estadisticas");
            eleP= document.createElement("p");


            JSONObject.forEach(element => {
                let salario= parseFloat(element.salario);
                console.log("salario " + salario);
                console.log("salario selec.3: " + parseFloat(salarioSeleccionado) );



                if( salario >= salarioSeleccionado ){

                    sumaEdades += salario;
                    contEdades++;

                    
                    if(element.edad> edadMax){
                        edadMax= element.edad;
                        nombreEdadMax= element.nombre;
                    }

                    if(element.salario< salarioMin){
                        salarioMin= element.salario;
                        nombreSalarioMin= element.nombre;
                    }    
                

     /********************************************** */
                    eleTr= document.createElement("tr");

                    eleTdId= document.createElement("td");
                    eleTdId.innerHTML= element.id;

                    eleTdNombre= document.createElement("td");
                    eleTdNombre.innerHTML=  element.nombre;

                    eleTdEmail= document.createElement("td");
                    eleTdEmail.innerHTML=  element.email;

                    eleTdEdad= document.createElement("td");
                    eleTdEdad.innerHTML=  element.edad;

                    eleTdEstado= document.createElement("td");
                    eleTdEstado.innerHTML=  element.estado;

                    eleTdSalario=document.createElement("td");
                    eleTdSalario.innerHTML=  element.salario;

                    eleTr.appendChild(eleTdId);
                    eleTr.appendChild(eleTdNombre);
                    eleTr.appendChild(eleTdEmail);
                    eleTr.appendChild(eleTdEdad);
                    eleTr.appendChild(eleTdEstado);
                    eleTr.appendChild(eleTdSalario);

                    eleTabla.appendChild(eleTr); 
                }
            });

            eleP.innerHTML= "La media de edad es " + sumaEdades/contEdades + "<br>";
            eleP.innerHTML+="La persona con más edad es " + nombreEdadMax + " (" + edadMax + ")<br>";
            eleP.innerHTML+="La persona con menor salario es " + nombreSalarioMin + " (" + salarioMin + ")";
      
            eleEstadisticas.appendChild(eleP);
        }
    }
    xhr.open("GET", "tabla.json", true); 
    xhr.send();
}