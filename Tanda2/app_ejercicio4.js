function styleCSS(){
    document.getElementById("screen").style.border="1px solid blue";
    document.getElementById("screen").style.padding= "5px";
    document.getElementById("screen").style.margin= "5px";

    document.getElementById("navigator").style.border="1px solid red";
    document.getElementById("navigator").style.padding= "5px";
    document.getElementById("navigator").style.margin= "5px";

    document.getElementById("document").style.border="1px solid green";
    document.getElementById("document").style.padding= "5px";
    document.getElementById("document").style.margin= "5px";

    document.getElementById("location").style.border="1px solid yellow";
    document.getElementById("location").style.padding= "5px";
    document.getElementById("location").style.margin= "5px";
}


/*****************************************************************************************************************/
function resolution(){
    let winWidth= window.screen.availWidth;
    let winHeight= window.screen.availHeight;
    
    document.write("<p>Resolucion de la pantalla: " + winWidth  + "x" + winHeight + "</p>");
}

/*****************************************************************************************************************/
function browserDetect() {
   let browserName="";

   if (navigator.userAgent.search("MSIE") != -1)
       browserName="MSIE";

   else if (navigator.userAgent.search("Chrome") != -1)
       browserName="Chrome";

   else if (navigator.userAgent.search("Firefox") != -1)
       browserName="Firefox";
       
   else if (navigator.userAgent.search("Safari") != -1 && navigator.userAgent.search("Chrome") < 0)
       browserName="Safari";
   
   else if (navigator.userAgent.search("Opera") != -1) 
       browserName="Opera";

   if(browserName!="")
       document.write("<p>El navegador que se está utilizando es <strong>"+ browserName +"</strong></p>");
   else
       document.write("<p>Navegador no detectado</p>");
   
}

/*****************************************************************************************************************/
function soDetect(){
   let OSName="Desconocido";
   let OSDetected= navigator.appVersion.toLowerCase();

   if (OSDetected.indexOf("win")!=-1)
       OSName="Windows";
   else if (OSDetected.indexOf("mac")!=-1)
       OSName="MacOS";
   else if (OSDetected.indexOf("x11")!=-1)
       OSName="UNIX";
   else if (OSDetected.indexOf("linux")!=-1)
       OSName="Linux";
   else if (OSDetected.indexOf("android")!=-1)
       OSName="Android";
   
   document.write("<p>Tu sistema operativo es: <strong>" + OSName + "</strong></p>");
}

/*****************************************************************************************************************/
function browserVersionDetect(){
    document.write("<p>Versión del navegador: <strong>" + navigator.userAgent + "</strong></p>");
}

/*****************************************************************************************************************/
function documentURL(){
    var docURL= document.location.pathname;
    document.write("<p>La URL del documento es: <strong>" + docURL + "</strong></p>");
}

/*****************************************************************************************************************/
function locationURL(){
    var docURL= document.location.protocol;
    document.write("<p>Protocolo usado: <strong>" + docURL + "</strong></p>");
}