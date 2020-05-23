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
        //Footer-valid
        $('.footer__form').validate({
          errorClass: "invalid",
          errorElement: "div",
          rules: {
            // Строчное правило
            footerName: {
              required: true,
              minlength: 2
            },
            footerPolicy: "required",
            footerPhone: "required",
            footerQuestion: "required",
            // Правило-объект(Блок)
            footerEmail: {
              required: true,
              email: true
            }
          },  //Сообщения
          messages: {
            footerName:{
              required: "Имя обязательно",
              minlength: "Имя не короче двух букв"
            },
            footerPolicy:{
              required: "Лучше согласится !!!"
            },
            footerPhone: "Телефон обязателен",
            footerQuestion: {
              required: "Обязательно задайте ваш вопрос"
              
            }
          }
        });
        //control-form
        $('.control__form').validate({
          errorClass: "invalid",
          rules: {
            // Строчное правило
            controlName: {
              required: true,
              minlength: 2
            },
            controlPolicy: "required",
            controlPhone: "required",
          },  //Сообщения
          messages: {
            controlName:{
              required: "Имя обязательно",
              minlength: "Имя не короче двух букв"
            },
            controlPolicy:{
              required: "Лучше согласится !!!"
            },
            controlPhone: "Телефон обязателен",
            
          }
        });
        // маска для телефона
          $('[type=tel]').mask('+7 (000) 000-00-00');


        // Яндекс Карты
          ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [53.919200, 27.494623],
                    zoom: 12
                }, {
                    searchControlProvider: 'yandex#search'
                }),
        
                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),
        
                myPlacemark = new ymaps.Placemark([53.919200, 27.494623], {
                    hintContent: 'Glo-Academy:Repair-Design',
                    balloonContent: 'Метка для дз номер 25'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: './img/renovation.png',
                    // Размеры метки.
                    iconImageSize: [32, 32],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
                });        
                
        
            myMap.geoObjects
                .add(myPlacemark);
        });
});


