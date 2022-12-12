
//функция только для экранов меньше 880, так как кнопка меню на больших экранах недоступна
jQuery(".menu-button").click(function() { //если мы нажимаем на кнопку меню, то
  jQuery('.mainMenu').toggle(); //меню показывается
});

//обновление экрана по размеру окна
jQuery(window).resize(function($) {  
  var width = jQuery(window).width(); // переменная width (ширина экрана) = ширине окна браузера
  if (width > 880){ // если (ширина экрана больше 880)
    jQuery('.mainMenu').toggle(); // меню выбрано
    jQuery('.mainMenu').show(); // показать меню
    jQuery('.mainMenu').toggleClass('mainMenu_desctop'); // присвоила меню свойства, которые прописанны в данном классе css
    jQuery('.mainMenu').css('display', 'flex');  
  }
});

if (window.innerWidth < 880) {
  jQuery(document).on('click', function(e) { 
    if (!jQuery(e.target).closest(".header").length) { // если же мы нажимаем вне диапазона меню , то
      jQuery('.mainMenu').hide(); //скрываем наше меню
    }
    e.stopPropagation();
  });  
}




