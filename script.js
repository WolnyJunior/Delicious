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

var slidesBolos = 1;
showDivs(slidesBolos);

function slideFotos(n){
    showDivs(slidesBolos += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slide-apresentacao");
    if (n > x.length){ 
        slidesBolos = 1
    }

    if ( n < 1){
        slidesBolos = x.length
    };
    
    for(i = 0; i <x.length; i++){
        x[i].style.display = "none";
    }

    x[slides-1].style.display = "block";
}
