if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'slideHome', // nome do atributo data-slide="principal"
    time: 10000, // tempo de transição dos slides
    nav: true, // se deve ou não mostrar a navegação
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