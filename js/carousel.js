var mySwiper2 = new Swiper ('.swiper-container2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    centeredSlides:true,
    autoplay : { 
        delay : 2000 , 
      },
           
  });

  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement:'span',
      clickable:true,
    },
           
  });