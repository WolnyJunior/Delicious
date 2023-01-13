//Slide de Fotos Automático
var slides = 0;
carrossel();

function carrossel(){
    var i;
    var imagens = document.getElementsByClassName("slide-inicial");
    for (i = 0; i < imagens.length; i ++){
        imagens[i].style.display = "none";
    }

    slides++;
    if( slides > imagens.length){
        slides = 1
    }
    imagens[slides-1].style.display = "block";
    setTimeout(carrossel, 9000);
}

//Slide de Fotos Manual

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("imagem-slides");
    if (n > x.length){ 
        slideIndex = 1
    }

    if ( n < 1){
        slideIndex = x.length
    };
    
    for(i = 0; i <x.length; i++){
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

function bolos(tipoDeBolo) {
    var i;
    var x = document.getElementsByClassName("bolos");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tipoDeBolo).style.display = "flex";
  }