window.addEventListener('scroll', function(){
    var barra = document.querySelector('.hero__barra');
    var logo = document.querySelector('.logo span');
    var enlace = document.querySelectorAll('.menu__enlace');
    barra.classList.toggle('sticky', window.scrollY > 0);
    logo.classList.toggle('sticky', window.scrollY > 0);
    for (var i = 0; i < enlace.length; i++){
        enlace[i].classList.toggle('sticky', window.scrollY > 0);
    }
});

function toggleMenu(){
    var menu = document.querySelector('.menu');
    var salir = document.querySelector('.fas');
    menu.classList.toggle('activo');
    salir.classList.toggle('activo');
}

/* Efecto de escritura animada */
const typed = new Typed('.typed',{
    strings : ['Autodidacta',
                'Desarrollador Web',
                'Ingeniero de Software',
                'Analitico  '
            ],
    typeSpeed: 80,
    startDelay: 1000,
    backSpeed: 70,
    backDelay: 1500,
    loop: true,
    loopCount: false

});

/* efecto carousel */
window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    scrollPropagate: true,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 800px
        breakpoint: 768,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          /*itemWidth: 150,
                duration: 0.25*/
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 1,
        },
      },
    ],
  });
});