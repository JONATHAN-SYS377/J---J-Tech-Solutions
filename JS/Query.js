document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      // Configuración del carrusel
      slidesPerView: 'auto', // Permite que el número de diapositivas se ajuste automáticamente
      spaceBetween: 30, // Espacio entre las diapositivas

      // Configuración de la reproducción automática
      autoplay: {
        delay: 5000, // Tiempo en milisegundos entre cada diapositiva
      },

      // Agrega la navegación del carrusel
      navigation: {
        nextEl: '.elementor-swiper-button-next',
        prevEl: '.elementor-swiper-button-prev',
      },

      // Agrega la paginación del carrusel
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      // Ajusta el número de diapositivas visibles en diferentes tamaños de pantalla
      breakpoints: {
        1024: {
          slidesPerView: 4, // Pantallas grandes: muestra 3 diapositivas
        },
        768: {
          slidesPerView: 2, // Tablets: muestra 2 diapositivas
        },
        480: {
          slidesPerView: 1, // Celulares: muestra 1 diapositiva
        },
      },
    });
  });
 //Loader
 $(window).on('load', function() {
    $(".loader-overlay").fadeOut("slow");
  });

  var check = document.querySelector(".check");
  check.addEventListener("click", idioma);

  function idioma() {
    let id = check.checked;
    if (id== true){
      location.href = "Html/En/index.html";
    }
    else {
     window.location.href = "../../index.html";
    }
    console.log(id);

  }