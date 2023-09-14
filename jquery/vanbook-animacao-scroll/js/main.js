// Dica: Quebre em pequenas partes, procure códigos semelhantes e teste.

// 1 - Distância entre o scroll e o topo
// 2 - Ditância entre o elemento e o topo
// 3 - Verificar essas duas variáveis sempre que o scroll for ativado
// 4 - Se distância entre o elemento e o topo for maior que do scroll, adicionar classe
// 5 - A classe deve mostrar e animar o elemento

$(window).scroll(function() {
  let windowTop = $(this).scrollTop();
  $('.anime').each(function() {
    let beneficioTop = $(this).offset().top - 600;
    if(windowTop > beneficioTop) {
      $(this).addClass('anime-init')
      console.log(windowTop > beneficioTop)
    } else {
      $(this).removeClass('anime-init')
    }
  })
});