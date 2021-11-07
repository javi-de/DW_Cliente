let historialTweets= "";

window.onload= function(){
    let eleBoton= document.getElementsByClassName("button");
    console.log(eleBoton[0]);

    eleBoton[0].addEventListener("click", listener_boton);
}

function listener_boton(){
    let txtTweet= document.getElementById("tweet").value;
    console.log(txtTweet);

    historialTweets+= "<li>" + txtTweet + "<a class='borrar-tweet'>X</a></li>";
    document.getElementById("lista-tweets").innerHTML= historialTweets;
}

