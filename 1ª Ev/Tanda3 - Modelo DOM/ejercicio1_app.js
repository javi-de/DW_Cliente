window.onload = function() {
	
	let arrEnlaces= document.getElementsByTagName("a");
	let soluciones= document.createElement("p");

	// Numero de enlaces de la pagina
	soluciones.innerHTML= "Hay " + arrEnlaces.length + " enlaces.<br>";

	// Direccion del penultimo enlace
	let penultimoA= arrEnlaces[arrEnlaces.length-2].href;
	soluciones.innerHTML+= "El penúltimo enlace es " + penultimoA + "<br>";
	
	// Numero de enlaces que apuntan a http://prueba/
	let nEnlacesPrueba= 0;
	for(let count= 0; count<= arrEnlaces.length-1; count++){
		let atr= arrEnlaces[count].href;
		if(atr== "http://prueba/")
			nEnlacesPrueba++;
	}
	
	soluciones.innerHTML+= "Nº de enlaces vinculados con http://prueba: " + nEnlacesPrueba + "<br>";

	// Numero de enlaces del tercer p�rrafo
	let arrParrafos= document.getElementsByTagName("p");
	let arrEnlacesParrafo3= arrParrafos[2].getElementsByTagName("a");

	soluciones.innerHTML+= "En el tercer párrafo hay " + arrEnlacesParrafo3.length + " enlaces."

	document.body.appendChild(soluciones);
}
