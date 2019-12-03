var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000);
}

var myMIndex = 0;
carouselM();

function carouselM() {
  var i;
  var x = document.getElementsByClassName("myMSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myMIndex++;
  if (myMIndex > x.length) {myMIndex = 1}    
  x[myMIndex-1].style.display = "block";  
  setTimeout(carouselM, 5000);
}

var myNIndex = 0;
carouselN();

function carouselN() {
  var i;
  var x = document.getElementsByClassName("myNSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myNIndex++;
  if (myNIndex > x.length) {myNIndex = 1}    
  x[myNIndex-1].style.display = "block";  
  setTimeout(carouselN, 5000);
}