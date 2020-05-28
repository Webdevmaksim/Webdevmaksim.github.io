
// JQuery 
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        //Доп переменные
        //Модальное окно благодарности
        tModal = $('.t-modal'),
        TcloseBtn = $('.t-modal__close');

        TcloseBtn.on('click', function(){
          tModal.removeClass('t-modal--visible');
      });

      $(document).keydown(function(event) { 
        if (event.keyCode == 27) { 
        $('.t-modal').removeClass('t-modal--visible');
        }
        });
        //Закрытие на клик за пределами поля!!!
        $('.t-modal').click(function(e) {
          if ($(e.target).closest('.t-modal__dialog').length == 0){
            $(this).removeClass('t-modal--visible');					
          }
        });
        // основное модальное окно 
    modalBtn.on('click', function(){
       modal.toggleClass('modal--visible');
    });
  
    
    
    //закрытие на клавишу esc!!!
    $(document).keydown(function(event) { 
      if (event.keyCode == 27) { 
        $('.modal').removeClass('modal--visible');
      }
    });

    //Закрытие на клик за пределами поля!!!
    $('.modal').click(function(e) {
      //Вариант один
      // if ($(e.target).closest('.modal__dialog').length == 0)
      //Вариант два
      if (e.target == modal[0]){
        $(this).removeClass('modal--visible');					
      }
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
          errorClass: "invalid-modal",
          errorElement: "div",
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
          },
          submitHandler: function(form) {
            // $(form).ajaxSubmit();
            $.ajax({
              type: "POST",
              url: "./php/send.php",
              data: $(form).serialize(),
              success: function (response) {
                // confirm('Форма отправлена, мы свяжемся с вами в ближайшее время.');
                tModal.toggleClass('t-modal--visible');
                $(form)[0].reset();
                modal.removeClass('modal--visible');
              },
              error: function(response){
                console.log('Ошибка запроса ' + response);
              }
            });
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
          },
          submitHandler: function(form) {
            // $(form).ajaxSubmit();
            $.ajax({
              type: "POST",
              url: "./php/question.php",
              data: $(form).serialize(),
              success: function (response) {
                // confirm('Форма отправлена, мы свяжемся с вами в ближайшее время.');
                tModal.toggleClass('t-modal--visible');
                $(form)[0].reset();
              },
              error: function(response){
                console.log('Ошибка запроса ' + response);
              }
            });
          }
        });
        //control-form
        $('.control__form').validate({
          errorClass: "invalid",
          errorElement: "div",
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
            
          },
          submitHandler: function(form) {
            // $(form).ajaxSubmit();
            $.ajax({
              type: "POST",
              url: "./php/control.php",
              data: $(form).serialize(),
              success: function (response) {
                // confirm('Форма отправлена, мы свяжемся с вами в ближайшее время.');
                tModal.toggleClass('t-modal--visible'); 
                $(form)[0].reset();
              },
              error: function(response){
                console.log('Ошибка запроса ' + response);
              }
            });
          }
        });
        // маска для телефона
          $('[type=tel]').mask('+7 (000) 000-00-00');


        // Яндекс Карты
        //Ymap start
var spinner = $('.map__container').children('.map__loader');
var check_if_load = 0;
var myMapTemp, myPlacemarkTemp;


function init () {
  var myMapTemp = new ymaps.Map("map", {
    center: [53.919200, 27.494623],
    zoom: 12,
    controls: ['zoomControl', 'fullscreenControl']
  });

  var myPlacemarkTemp = new ymaps.Placemark([53.919200, 27.494623], {
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
  
  myMapTemp.geoObjects.add(myPlacemarkTemp);

  //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);

  //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
  waitForTilesLoad(layer).then(function() {
    //Скрываем
    spinner.removeClass('is-active');
  });
}

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer|| layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback){

  var script = document.createElement("script");

  if (script.readyState){  //IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Другие браузеры
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

var ymap = function() {
  $('.map__container').mouseenter(function(){
      if (check_if_load == 0) {
        check_if_load = 1;

        spinner.addClass('is-active');

        loadScript("https://api-maps.yandex.ru/2.1/?apikey=a646dc50-3618-4090-b0cc-460076d80b0c&lang=ru_RU", function(){
           ymaps.load(init);
        });         
       
      }
    }
  );  
};

$(function() {

  //Map Yandex
  ymap();

});


        //Кнопка прокрутки наверх
        $(window).scroll(function () {
          // Если отступ сверху больше 50px то показываем кнопку "Наверх"
          if ($(this).scrollTop() > 50) {
              $('.button-up').fadeIn();
          } else {
              $('.button-up').fadeOut();
          }
      });
      
      /** При нажатии на кнопку мы перемещаемся к началу страницы */
      $('.button-up').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500);
          return false;
      });
});


