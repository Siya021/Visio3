$(document).ready(function () {
    const interval = 3000; // Interval for automatic slideshow (in milliseconds)

    // Function to start the slideshow
    function startSlideshow() {
        setInterval(function () {
            var currentImg = $(".slidein img.active");
            var nextImg = currentImg.next();

            if (nextImg.length === 0) {
                nextImg = $(".slidein img:first");
            }

            currentImg.removeClass("active").css("z-index", -10);
            nextImg.addClass("active").css("z-index", 10);
        }, interval);
    }

    // Start the slideshow when the document is ready
    startSlideshow();

    // Manual control for next slide
    $(".next").on("click", function () {
        var currentSVG = $(".radio-btn .activeSVG");
        var nextSVG = currentSVG.next();

        if (nextSVG.length === 0) {
            nextSVG = $(".radio-btn img:first");
        }

        currentSVG.removeClass("activeSVG");
        nextSVG.addClass("activeSVG");

        var currentImg = $(".slidein img.active");
        var nextImg = currentImg.next();

        if (nextImg.length === 0) {
            nextImg = $(".slidein img:first");
        }

        currentImg.removeClass("active").css("z-index", -10);
        nextImg.addClass("active").css("z-index", 10);
    });

    // Manual control for previous slide
    $(".prev").on("click", function () {
        var currentSVG = $(".radio-btn .activeSVG");
        var prevSVG = currentSVG.prev();

        if (prevSVG.length === 0) {
            prevSVG = $(".radio-btn img:last");
        }

        currentSVG.removeClass("activeSVG");
        prevSVG.addClass("activeSVG");

        var currentImg = $(".slidein img.active");
        var prevImg = currentImg.prev();

        if (prevImg.length === 0) {
            prevImg = $(".slidein img:last");
        }

        currentImg.removeClass("active").css("z-index", -10);
        prevImg.addClass("active").css("z-index", 10);
    });
});
