$('.abrir-modal').click(() => {
  $('.abrir-modal').text('Clicou!');
});

$('.abrir-modal').on('click', () => {
  $('.abrir-modal').text('Clicou!');
});

$('a').on('click', function() {
  $(this).text('Clicou!');
});

$('.abrir-modal').mouseenter(() => {
  $('.abrir-modal').text('Modal Aberto!');
});

$('a').on('mouseenter', function() {
  $(this).text('Modal Aberto!');
});

$('a').on('mouseleave', function() {
  $(this).text('Modal Fechado!');
});

$(document).on('scroll', function() {
  $('a').text($(document).scrollTop());
});

$(window).on('resize', function() {
  $('a').text($('body').width());
});