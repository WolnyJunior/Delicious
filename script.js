//Slide de Fotos Automático

let time = 3000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll(".banner img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


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

//Script para função com scroll suave
  $(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });