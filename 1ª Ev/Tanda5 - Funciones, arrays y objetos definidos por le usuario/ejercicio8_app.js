const array1 = ["Rojo", "Verde", "Azul"];
const array2 = ["70", "9", "800"];
const array3 = [50, 10, 2, 300];
const array4 = ["70", "8", "850", 30, 10, 5, 400];

let num= 1;

function mostrarArray(unarray){
    let cadena= "Array" + num + ": ";
    unarray.forEach(valor => {
        if(typeof valor== "string"){
           cadena+= '"'+ valor +'", ';
        }else if(typeof valor== "number"){
            cadena+= valor + ', ';
        }
    });
    
    let eleP= document.createElement("p");
    eleP.innerHTML= cadena;
    document.body.appendChild(eleP);

    num++;
}

mostrarArray(array1);
mostrarArray(array2);
mostrarArray(array3);
mostrarArray(array4);