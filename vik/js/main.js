$(function () {
    $(".slider__item").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        asNavFor: ".slider__info",
        responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              }
            },
        ]
    });
    $(".slider__info").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider__item",
        fade: true,
        arrows: false,
    });

    $("[data-fancybox]").fancybox({
        youtube: {
            controls: 1,
            showinfo: 1,
        },
    });

    $('.hide').on('click', function(){
        $('.overlay, .overlay__cnt').fadeIn();
    });

    $('.overlay').on('click', function(){
        $('.overlay, .overlay__cnt').fadeOut();
    })

    window.addEventListener("DOMContentLoaded", () => {
        const menu = document.querySelector(".menu"),
            menuItem = document.querySelectorAll(".menu__item"),
            hamburger = document.querySelector(".hamburger");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("menu_active");
        });

        menuItem.forEach((item) => {
            item.addEventListener("click", () => {
                hamburger.classList.toggle("hamburger_active");
                menu.classList.toggle("menu_active");
            });
        });
    });



});
