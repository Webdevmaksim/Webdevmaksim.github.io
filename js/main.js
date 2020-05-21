// document.addEventListener("DOMContentLoaded", function(event) { 
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const closeBtn = document.querySelector('.modal__close');
//     const switchModal = () =>{
//         modal.classList.toggle('modal--visible');
//     }

//     modalBtn.forEach(element => {
//         element.addEventListener('click', switchModal);
//     });

//     closeBtn.addEventListener('click', switchModal);
// });

// Закрытие на esc и куда угодно но не на модальное окно 

// const alternativeClose = (esc, fadeClick) => {
//     document.addEventListener('click', function(event){

//     });
// }

// document.addEventListener('keypress', (event) => {
//     if (event.code == 'Esc'){
//         console.log('event'),
//         event.classList.toggle('modal--visible');
//     }
// });


// JQuery Модальное окно
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');
        modalD = $('.modal--visible');

    modalBtn.on('click', function(){
       modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });




     //initialize swiper when document ready
        var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      },
  });
        var next = $('.swiper-button-next');
        var prev = $('.swiper-button-prev');
        var bullets = $('.swiper-pagination');
        var bullet = $('.swiper-pagination-bullet');
        // Margin-positioning for the left arrow 
        next.css('left', prev.width() + 10 + bullets.width() +20);
        bullets.css('left', prev.width() + 20);

        new WOW().init();

        // Валидация формы 
        $('.modal__form').validate({
          errorClass: "invalid",
          rules: {
            // Строчное правило
            userName: {
              required: true,
              minlength: 2
            },
            modalCheckbox: "required",
            userPhone: "required",
            // Правило-объект(Блок)
            userEmail: {
              required: true,
              email: true
            }
          },  //Сообщения
          messages: {
            userName:{
              required: "Имя обязательно",
              minlength: "Имя не короче двух букв"
            },
            modalCheckbox:{
              required: "Лучше согласится !!!"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите email",
              email: "Ведите в формате name@domain.com"
            }
          }
        });
        // маска для телефона
          $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});


