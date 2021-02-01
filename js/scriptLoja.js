// Slide loja

$(function() {

  function attInfosLoja() {
    $("#watch-name").text($(".slick-center").data("name"));
    $("#watch-price").text($(".slick-center").data("bomb"));

    $("#watch-name2").text($(".watch-slider2 .slick-center").data("name"));
    $("#watch-price2").text($(".watch-slider2 .slick-center").data("bomb"));

    $("#watch-name3").text($(".watch-slider3 .slick-center").data("name"));
    $("#watch-price3").text($(".watch-slider3 .slick-center").data("bomb"));
  }
  
  $('.watch-slider').on('init', function () {
    attInfosLoja();
  });
  $('.watch-slider2').on('init', function () {
    attInfosLoja();
  });
  $('.watch-slider3').on('init', function () {
    attInfosLoja();
  });

  $('.watch-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    useCSS: true,
    prevArrow:$("#arrow-prev"),
    nextArrow:$("#arrow-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.watch-slider2').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    useCSS: true,
    prevArrow:$("#arrow-prev2"),
    nextArrow:$("#arrow-next2"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.watch-slider3').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    useCSS: true,
    prevArrow:$("#arrow-prev3"),
    nextArrow:$("#arrow-next3"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.watch-slider').on('afterChange', function () {
    attInfosLoja();
  });
  $('.watch-slider2').on('afterChange', function () {
    attInfosLoja();
  });
  $('.watch-slider3').on('afterChange', function () {
    attInfosLoja();
  });

})

// Modal produtos

function incialModal(modalID, produtoAtual) {
  const modal = document.getElementById(modalID);

  if(modal) {

    constroiModal(modal, produtoAtual);

    modal.classList.add('mostrarModal');
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalID || e.target.id == 'fecharModal') {
          modal.classList.remove('mostrarModal');
      } 
    });
  }
}

function constroiModal(modal ,produtoAtual) {
  
  const nome = produtoAtual.getAttribute('data-name');
  const descricao = produtoAtual.getAttribute('data-desc');
  const referencia = produtoAtual.getAttribute('data-ref');
  const material = produtoAtual.getAttribute('data-mat');
  const caminhoIMG = produtoAtual.getAttribute('src');

  modal.querySelector('h3').innerText = nome;
  modal.querySelector('.ref').innerText = referencia;
  modal.querySelector('.desc').innerText = descricao;
  modal.querySelector('.mat').innerText = material;
  modal.querySelector('img').src = caminhoIMG

}

const saberMaisProduto = document.querySelector('.modalButton');
const saberMaisProduto2 = document.querySelector('.modalButton2');
const saberMaisProduto3 = document.querySelector('.modalButton3');

saberMaisProduto.addEventListener('click', function () {
  event.preventDefault();
  const produtoAtual = document.querySelector('.slick-center')
  incialModal('modalProdutos', produtoAtual);
})
saberMaisProduto2.addEventListener('click', function () {
  event.preventDefault();
  const produtoAtual = document.querySelector('.watch-slider2 .slick-center')
  incialModal('modalProdutos', produtoAtual);
})
saberMaisProduto3.addEventListener('click', function () {
  event.preventDefault();
  const produtoAtual = document.querySelector('.watch-slider3 .slick-center')
  incialModal('modalProdutos', produtoAtual);
})