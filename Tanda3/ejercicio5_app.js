const botones = [
    "cero", "uno", "dos", "tres", "cuatro", "cinco","seis", "siete", 
    "ocho", "nueve",
    "suma", "resta", "multiplicacion", "division",
  ];

  const btnIgual = "igual";
  const btnReset = "reset";
  const pantalla = "resultado";
  const error = "error";
  
  function aniadir(input, txt) {
    input.value += txt;
  }
  
  function borrar(input) {
    input.value = "";
  }
  
  function calcular(input, errorHtml) 
  {
    const operacion = input.value;
    let result = "";
    try {
      result = eval(operacion);
      if (result == Infinity || result == -Infinity)
      {
          errorHtml.innerHTML = "No se puede dividir entre cero. Imaginate que tienes 10 galletas para repartir entre 0 amigos. No tiene sentido. Ahora tu estas triste porque tienes galletas, pero no tienes amigos.";
          borrar(input);
          return;
      }
    } catch (error) {
      errorHtml.innerHTML = "Operacion invalida";
      borrar(input);
    }
  
    input.value = result;
  }
  
  window.onload = () => {
    const pErrorHtml = document.getElementById(error);
    const resultadoHtml = document.getElementById(pantalla);
  
    botones.forEach((id) => {
      const btn = document.getElementById(id);
      btn.onclick = () => aniadir(resultadoHtml, btn.innerHTML);
    });
  
    const btnResetHtml = document.getElementById(btnReset);
    btnResetHtml.onclick = () => borrar(resultadoHtml);
  
    const btnIgualHtml = document.getElementById(btnIgual);
    btnIgualHtml.onclick = () => calcular(resultadoHtml, pErrorHtml);
  };