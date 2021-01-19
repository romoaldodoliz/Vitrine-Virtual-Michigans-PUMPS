if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'slideHomeProdutos', // nome do atributo data-slide="principal"
    time: 8000, // tempo de transição dos slides
    nav: false, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    pauseOnHover: true, // pausa a transição automática
  });
}
if (window.SimpleAnime) {
  new SimpleAnime();
}
if(window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><h2>Erro no envio do formulário</h2><p>Um erro ocorreu, mas nossa equipe já foi notificada e estaremos corrigindo esse pequeno problema, enquanto isso, entre em contato através do email contato@tideweb.com.br</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato!</p></div>", // mensagem de sucesso
  });
}

// Scroll suave js (https://www.youtube.com/watch?v=tzbpAqb2Wjc)
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to, 1000);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// $(function() {

//   $('.watch-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     prevArrow: $("#arrow-prev"),
//     nextArrow: $("#arrow-next"),
//   });

// })

