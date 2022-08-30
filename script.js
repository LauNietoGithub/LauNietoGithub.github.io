// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

// **Requisitos:**
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

function encriptar (){
    var texto = document.getElementById ("textEncrip").value.toLowerCase();
    var crip = texto.replace(/e/igm,"enter")
    var crip = crip.replace(/i/igm,"imes")
    var crip = crip.replace(/a/igm,"ai")
    var crip = crip.replace(/o/igm,"ober")
    var crip = crip.replace(/u/igm,"ufat")
    document.getElementById("imagenMuneco").style.display = "none";
    document.getElementById("textDerecha").style.display = "none";
    document.getElementById("textDerecha2").innerHTML = crip;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar (){
    var texto = document.getElementById ("textEncrip").value.toLowerCase();
    var crip = texto.replace(/enter/igm,"e")
    var crip = crip.replace(/imes/igm,"i")
    var crip = crip.replace(/ai/igm,"a")
    var crip = crip.replace(/ober/igm,"o")
    var crip = crip.replace(/ufat/igm,"u")
    document.getElementById("imagenMuneco").style.display = "none";
    document.getElementById("textDerecha").style.display = "none";
    document.getElementById("textDerecha2").innerHTML = crip;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar (){
    var contenido = document.getElementById ("textDerecha2").value;
    document.getElementById ("textEncrip").value = contenido;
    
    
   
  
}

