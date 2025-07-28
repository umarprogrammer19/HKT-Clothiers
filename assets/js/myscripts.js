$(document).ready(function () {
  $(".hero-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    //fade: true,
    arrows: true,
    nextArrow: '<button class="hero-btn-next">Next</button>',
    prevArrow: '<button class="hero-btn-prev">Prev</button>',
  });

  //POST Carousel
  $(".post-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: "160px",
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $(".prevc"),
    nextArrow: $(".nextc"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });


  // Mob slider for 3 images below hero slider
  $(".mob-list").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: true,
    dots: false,
    prevArrow: $(".prevc2"),
    nextArrow: $(".nextc2"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "80px",
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "70px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "70px",
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Initialize slide counter
  $(".mob-list").on("init reInit afterChange", function (event, slick, currentSlide) {
    // Get the current slide index (add 1 since index is 0-based)
    var current = (currentSlide ? currentSlide : 0) + 1;
    // Get the total number of slides
    var total = slick.slideCount;
    // Update the slide counter text
    $(".slide-counter").text(current + "/" + total);
  });

  // Bind counter arrows to slider navigation
  $(".counter-prev").on("click", function () {
    $(".mob-list").slick("slickPrev");
  });

  $(".counter-next").on("click", function () {
    $(".mob-list").slick("slickNext");
  });

  //03 product slider

  $(".services-grid").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    centerMode: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerPadding: "0px",
    slidesToScroll: 1,
    arrows: true,
    dots: false,

    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  //reviews slider
  $(".reviews-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    autoplay: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // Update navigation on slide change
  $('.reviews-carousel').on('afterChange', function (event, slick, currentSlide) {
    var totalSlides = slick.slideCount;
    var currentSlideNum = currentSlide + 1;

    // Update slide numbers
    $('.current-slide').text(('0' + currentSlideNum).slice(-2));
    $('.total-slides').text(('0' + totalSlides).slice(-2));

    // Calculate progress for the bar
    var progress = ((currentSlideNum - 1) / (totalSlides - 1)) * 100;
    if (totalSlides === 1) {
      progress = 100; // If only one slide, fill the bar completely
    }
    $('.progress').css('width', progress + '%');
  });

  // Initialize navigation on load
  $('.reviews-carousel').on('init', function (event, slick) {
    var totalSlides = slick.slideCount;
    $('.total-slides').text(('0' + totalSlides).slice(-2));
    // Set initial progress (first slide)
    var progress = (0 / (totalSlides - 1)) * 100;
    if (totalSlides === 1) {
      progress = 100;
    }
    $('.progress').css('width', progress + '%');
  });

  //end of review slider
  //BLOG HOME SLIDER
  $('.blog-slider').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerPadding: '160px',
    slidesToShow: 3,
    prevArrow: $(".prevf"),
    nextArrow: $(".nextf"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // END

  //
  /*
    $(document).ready(function () {
      var $slider = $(".fbd-slider");
      var $progressBar = $(".progress");
      var $progressBarLabel = $(".slider__label");
  
      $slider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          var calc = (nextSlide / (slick.slideCount - 1)) * 100;
          var calc2 = calc + 10;
  
          $progressBar
            .css("background-size", calc2 + "% 100%")
            .attr("aria-valuenow", calc2);
  
          $progressBarLabel.text(calc2 + "% completed");
        }
      );
  
      $slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
      });
    });
  */
  //


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
      $(".header.header").addClass("darkHeader");
      $("a.site-logo img").css("max-width", "200px");
      //$("header.header ul.nav").css("gap", "30px");
      $(".clr-logo").removeClass("d-none");
      $(".wt-logo").addClass("d-none");
    } else {
      $(".header.header").removeClass("darkHeader");
      $("a.site-logo img").css("max-width", "245px");
      //$("header.header ul.nav").css("gap", "50px");
      $(".wt-logo").removeClass("d-none");
      $(".clr-logo").addClass("d-none");
    }
  });

  $(".mobile-nav-button").on("click", function () {
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass(
      "mobile-nav-button__line--1"
    );
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass(
      "mobile-nav-button__line--2"
    );
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass(
      "mobile-nav-button__line--3"
    );

    $(".mobile-menu").toggleClass("mobile-menu--open");
    return false;
  });

  AOS.init();



}); // end of function

//
document.addEventListener("DOMContentLoaded", function () {
  const mapImg = document.querySelector(".map-container1 img");
  if (mapImg) {
    mapImg.style.cursor = "pointer";
    mapImg.addEventListener("click", function () {
      window.open("https://maps.app.goo.gl/a4NXi3vbsMG71rKd8", "_blank");
    });
  }
});


//
        document.addEventListener('DOMContentLoaded', () => {
            const accordionItems = document.querySelectorAll('.hktp-accordion-item');
            const images = document.querySelectorAll('.wed-image');

            accordionItems.forEach(item => {
                const header = item.querySelector('.hktp-accordion-header');
                header.addEventListener('click', () => {
                    // Toggle active content
                    accordionItems.forEach(i => {
                        const content = i.querySelector('.hktp-accordion-content');
                        if (i === item) {
                            i.classList.toggle('active');
                            content.classList.toggle('active');
                        } else {
                            i.classList.remove('active');
                            content.classList.remove('active');
                        }
                    });

                    // Toggle active image
                    const imageClass = item.getAttribute('data-image');
                    images.forEach(img => {
                        if (img.classList.contains(imageClass)) {
                            img.classList.add('active');
                        } else {
                            img.classList.remove('active');
                        }
                    });
                });
            });
        });