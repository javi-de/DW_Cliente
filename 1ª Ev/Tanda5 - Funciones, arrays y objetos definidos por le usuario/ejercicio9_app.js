arrDiasSemana=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", 
               "Viernes", "Sábado"];

function validarFecha(dia, mes, anio){
    if(dia.includes(".") || mes.includes(".") || anio.includes(".")){
        console.log("error punto");
        return false;
    }
    if(dia.length> 2 || mes.length> 2 || anio.length> 4){
        console.log("error length");
        return false;
    }

    if(mes<1 || mes >12){
        console.log("error rango mes");
        return false;
    }

    if(dia<1 || dia >31){
        console.log("error rango dia");
        return false;
    }

    return true;
}

function calcularFechas(){
    let fecha= prompt("Introduce una fecha (dd/mm/aaaa): ");

    if(fecha!= ""){
        let arrDiaMesAnio= fecha.split("/");

        if(arrDiaMesAnio.length!= 3) {
            console.log("has metido mas o menos de tres cosas");
            return;
        }else{
            let dia= arrDiaMesAnio[0];
            let mes= arrDiaMesAnio[1];
            let anio= arrDiaMesAnio[2];

            if(!validarFecha(dia, mes, anio)){
                console.log("maaaaaaaaaaaaaaaaaal");
                return;
            }else{
                let arrFechasAnteriores=[];
                for(let cont= 0; cont<= 4; cont++){
                    let fechaAnterior= new Date((anio - cont), mes-1, dia)
                    arrFechasAnteriores[4-cont]= fechaAnterior;
                    console.log(arrFechasAnteriores[4-cont]);
                }

                //dibujando
                arrFechasAnteriores.forEach(fechaAnt => {
                    document.getElementById("fechaIntro").innerHTML= fecha;

                    let elementoAux= document.createElement("td");
                    let elementoAux2= document.createElement("td");

                    elementoAux.innerHTML= fechaAnt.getFullYear();
                    document.getElementById("aniosAnteriores").appendChild(elementoAux);

                    elementoAux2.innerHTML= arrDiasSemana[fechaAnt.getDay()];
                    document.getElementById("diasSemana").appendChild(elementoAux2);
                })
            }
        }
    }else{
        alert("No has escrito nada!!");
    }
}