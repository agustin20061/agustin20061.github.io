window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0);
})


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.25,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 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z 
