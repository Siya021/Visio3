// $(document).ready(function () {
//     // Define the interval for the slideshow (in milliseconds)
//     const interval = 3000; // Change this value as needed
  
//     // Function to start the slideshow
//     function startSlideshow() {
//       setInterval(function () {
//         let currentImg = $(".img-container .active");
//         let nextImg = currentImg.next();
  
//         // If there is no next image, loop back to the first image
//         if (!nextImg.length) {
//           nextImg = $(".img-container img").first();
//         }
  
//         currentImg.removeClass('active').css('z-index', -1);
//         nextImg.addClass('active').css('z-index', 1);
//       }, interval);
//     }
  
//     // Start the slideshow when the document is ready
//     startSlideshow();
//   });
$(document).ready(function () {
    $(".arrow").on("click", function () {
      var currentImg = $(".slidein img.active");
      var nextImg = currentImg.next();
  
      if (nextImg.length === 0) {
        nextImg = $(".slidein img:first");
      }
  
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    });
  
    $(".prev").on("click", function () {
      var currentImg = $(".slidein img.active");
      var prevImg = currentImg.prev();
  
      if (prevImg.length === 0) {
        prevImg = $(".slidein img:last");
      }
  
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    });
  
    $(".next").on("click", function () {
      var currentSVG = $(".radio-btn .activeSVG");
      var nextSVG = currentSVG.next();
  
      if (nextSVG.length === 0) {
        nextSVG = $(".radio-btn img:first");
      }
  
      currentSVG.removeClass("activeSVG");
      nextSVG.addClass("activeSVG");
    });
  });