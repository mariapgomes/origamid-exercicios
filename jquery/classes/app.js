// $('.abrir-modal').on('click', function() {
//   $('.modal').addClass('active');
// })

$('.abrir-modal').on('click', function() {
  $('.modal').toggleClass('active');
  const condicao = $('.modal').hasClass('active');
  
  if(condicao) {
    $(this).text('Fechar Modal');
  } else {
    $(this).text('Abrir Modal');
  }
})