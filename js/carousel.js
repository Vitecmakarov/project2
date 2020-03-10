// var slideIndex = 1;
// showSlides(slideIndex);


// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// function minusSlide() {
//     showSlides(slideIndex -= 1);  
// }


// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     var dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

var mySwiper2 = new Swiper ('.swiper-container2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    centeredSlides:true,
    autoplay : { 
        delay : 2000 , 
      },
           
  });

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement:'span',
    },
           
  });