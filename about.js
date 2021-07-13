// Carousel

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 2;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     console.log(slides); /* we added this on Saturday*/
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   console.log(slides);
//   console.log(slideIndex);
//   console.log(slides[slideIndex - 1]);
//   slides[slideIndex - 1].style.display = "block";

//   dots[slideIndex - 1].className += " active";
// }

// //Alternative Solution?//
// $(".carousel").swipe({
//   swipe: function (
//     event,
//     direction,
//     distance,
//     duration,
//     fingerCount,
//     fingerData
//   ) {
//     if (direction == "left") $(this).carousel("next");
//     if (direction == "right") $(this).carousel("prev");
//   },
//   allowPageScroll: "vertical",
// });

//Carousel

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}
