$(document).ready(function () {
    $(".nxtBtn").on("click", function () {
      let currentImg = $(".img-container .active");
      let nextImg = currentImg.next();
  

      if (!nextImg.length) {
        nextImg = $(".img-container img").first();
      }
  
      currentImg.removeClass('active').css('z-index', -1);
      nextImg.addClass('active').css('z-index', 1);
    });
  });
  