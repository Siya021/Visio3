$(document).ready(function () {
    // Define the interval for the slideshow (in milliseconds)
    const interval = 3000; // Change this value as needed
  
    // Function to start the slideshow
    function startSlideshow() {
      setInterval(function () {
        let currentImg = $(".img-container .active");
        let nextImg = currentImg.next();
  
        // If there is no next image, loop back to the first image
        if (!nextImg.length) {
          nextImg = $(".img-container img").first();
        }
  
        currentImg.removeClass('active').css('z-index', -1);
        nextImg.addClass('active').css('z-index', 1);
      }, interval);
    }
  
    // Start the slideshow when the document is ready
    startSlideshow();
  });
  