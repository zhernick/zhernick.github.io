$(document).ready(function () {
  $('.carousel__inner').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 500,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  $('.catalog-item__link').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });

  $('.catalog-item__back').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.footer__info'),
      hamburger = document.querySelector('.hamburger__content');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger__content_active');
      menu.classList.toggle('footer__info_active');
    });
  });

  //modal

  $('[data-modal="consultation"]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  function validateForms(form){
    $(form).validate({
      rules:{
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста введите своё имя",
          minlength: jQuery.validator.format("Введите от {0} символов!")
        },
        phone: "Пожалуйста введите свой номер телефона",
        email: {
          required: "Пожалуйста введите свою почту",
          email: "Пожалуйста введите свою почту в формате имя@mail.com"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#order form');
  validateForms('#consultation form');



});


