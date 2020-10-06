$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/right.png"></button>',
        dots: true,
        autoplay: false,
        speed: 1500,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                  dots: true,
                  arrows: false
                }
              },
        ]
    });

    $('.slider__solution').slick({
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev_solution"><img src="img/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next_solution"><img src="img/right.png"></button>',
        speed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    window.addEventListener("DOMContentLoaded", () => {
        const menu = document.querySelector(".main__menu"),
            menuItem = document.querySelectorAll(".main__menu-item"),
            hamburger = document.querySelector(".hamburger");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("main__menu_active");
        });

        menuItem.forEach((item) => {
            item.addEventListener("click", () => {
                hamburger.classList.toggle("hamburger_active");
                menu.classList.toggle("main__menu_active");
            });
        });

        $('#order, .work__button').on('click', function(){
            $('.overlay, .order').fadeIn();
        });

        $('.form__close').on('click', function(){
            $('.overlay, .order').fadeOut();
        });

    });
});
