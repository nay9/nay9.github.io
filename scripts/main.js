// carousel/slide show stuff 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}




// modal stuff
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var sillyModal = document.getElementById('sillyModal');
var bioModal = document.getElementById('bioModal');


var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var bioBtn = document.getElementById("bioBtn");


btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
sillyBtn.onclick = function() {
  sillyModal.style.display = "block";
}
bioBtn.onclick = function() {
  bioModal.style.display = "block";
}

// when user clicks outside modal, close modal
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if(event.target == modal2) {
    modal2.style.display = "none";
  } else if(event.target == modal3) {
    modal3.style.display = "none";
  } else if(event.target == modal4) {
    modal4.style.display = "none";
  } else if(event.target == sillyModal) {
    sillyModal.style.display = "none";
  } else if(event.target == bioModal) {
    bioModal.style.display = "none";
  }
}




run();

function run() {
  bindMenuToggleToMenuItems();
}

function toggleHide(element) {
  element.classList.toggle("hide");
}

function bindMenuToggleToMenuItems() {
  const menuToggle = document.querySelector(".menu_toggle");

  menuToggle.addEventListener("click", function() {
    const menuItems = document.querySelector(".menu_items");
    toggleHide(menuItems);
  });
}
