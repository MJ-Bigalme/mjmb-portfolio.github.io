$(document).ready(function () {
    
    

    $(window).scroll(function () {
        // top navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("top");
        } else {
            $('.navbar').removeClass("top");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Front-end Developer", "Back-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Front-end Developer", "Back-end Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });



    // Get the profile picture container by its ID
    const profilePictureContainer = document.getElementById("profile-picture");

    // Add click event listener for interactivity
    profilePictureContainer.addEventListener("click", function () {
        // Generate random RGB values for background color
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

        // Apply the random color to the background
        profilePictureContainer.style.backgroundColor = randomColor;
    });

});





document.addEventListener("DOMContentLoaded", function() {
    const experienceItems = document.querySelectorAll(".experience-item");
    
    function checkViewport() {
        experienceItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
            
            if (isVisible) {
                item.classList.add("animate");
            }
        });
    }

    // Initial check when page loads
    checkViewport();

    // Check again when user scrolls
    window.addEventListener("scroll", checkViewport);
});
