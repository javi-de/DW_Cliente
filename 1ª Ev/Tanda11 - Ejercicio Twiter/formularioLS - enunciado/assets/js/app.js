let localStorage;
let eleForm_formulario;
let eleTextArea_tweet;
let eleDiv_listaTweets;
let tweets;

window.onload 
{
    localStorage=window.localStorage;
    //localStorage.clear();
    eleForm_formulario=document.getElementById("formulario");
    eleTextArea_tweet=document.getElementById("tweet");
    eleDiv_listaTweets=document.getElementById("lista-tweets");
    
    getTweetsFromLocalStorage();
    eleForm_formulario.addEventListener("submit", aniadirTweet);
    eleDiv_listaTweets.addEventListener("click", borrarTweet);
}

function aniadirTweet()
{
    let txtTweet=eleTextArea_tweet.value;
    if(txtTweet== "")
        return false;
    
    let eleLi_nuevoTweet=document.createElement("li");
    eleLi_nuevoTweet.innerHTML=txtTweet;

    let eleAnchor_borrarTweet=document.createElement("a");
    eleAnchor_borrarTweet.classList="borrar-tweet";
    eleAnchor_borrarTweet.innerText="X";

    eleLi_nuevoTweet.appendChild(eleAnchor_borrarTweet);
    eleDiv_listaTweets.appendChild(eleLi_nuevoTweet);

    addTweetToLocalStorage(txtTweet);
    eleTextArea_tweet.value="";
}

function addTweetToLocalStorage(txtTweet)
{
    tweets[tweets.length]=txtTweet;
    localStorage.setItem("historial", JSON.stringify(tweets));
}

function borrarTweet(eventSource)
{
    if(eventSource.target.className == "borrar-tweet")
    {
        let txtEventSource=eventSource.target.parentElement.innerText;
        txtEventSource=txtEventSource.substring(0, txtEventSource.length-1).trim();
        eventSource.target.parentElement.remove();
        for(let i=0; i < tweets.length; i++)
        {
            let tweet=tweets[i];
            if(txtEventSource == tweet)
            {
                tweets.splice(i, 1);
                localStorage.setItem("historial", JSON.stringify(tweets));
            }
        }
    }
}

function getTweetsFromLocalStorage()
{
    if(localStorage.getItem("historial") == null)
        tweets=[];
    else 
        tweets=JSON.parse(localStorage.getItem("historial"));

    refresh();
}

function refresh()
{
    for(let i=0; i < tweets.length; i++)
    {
        let txtTweet=tweets[i];
        
        let eleLi_nuevoTweet=document.createElement("li");
        eleLi_nuevoTweet.innerHTML=txtTweet;

        let eleAnchor_borrarTweet=document.createElement("a");
        eleAnchor_borrarTweet.classList="borrar-tweet";
        eleAnchor_borrarTweet.innerText="X";

        eleLi_nuevoTweet.appendChild(eleAnchor_borrarTweet);
        eleDiv_listaTweets.appendChild(eleLi_nuevoTweet);
    }
}
/*
let eleDiv_listaTweets;
let eleBoton;
let txtTweets;
let storage;
*/
/*
if (typeof(Storage) !== "undefined") {
    console.log("local storage funciona");
} else {
    console.log("nanai");
}
*/
/*
window.onload= function(){
    eleDiv_listaTweets=document.getElementById("lista-tweets");
    eleBoton= document.getElementsByClassName("button");
    console.log(eleBoton[0]);

    eleBoton[0].addEventListener("click", listener_boton);

    //txtTweets= "";
    storage= window.localStorage;
    getTweetsFromLocalStorage();
}

function listener_boton(){
    let txtTweet= document.getElementById("tweet").value;
    if(txtTweet== "")
        return false;

    console.log(txtTweet);
    //txtTweets[txtTweets.length]= "<li>" + txtTweet + "</li>\n";
    txtTweets[txtTweets.length]= txtTweet;

    storage.setItem("historialTweet", JSON.stringify(txtTweets));
}

function getTweetsFromLocalStorage()
{
    if(storage.getItem('historialTweet') == null)
        txtTweets=[];
    else 
        txtTweets=JSON.parse(storage.getItem('historialTweet'));

    refresh();
}

function refresh()
{
    for(let i=0; i < txtTweets.length; i++)
    {
        let tweet=txtTweets[i];
        console.log(tweet);
    }
}
*/