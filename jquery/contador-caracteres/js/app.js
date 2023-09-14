(function(){
  let $contadorCaracteres = $('[data-contador="caracteres"]'),
      $contadorPalavras = $('[data-contador="palavras"]');
  
  $('[data-input="textarea"]').on('keyup paste', function() {
    setTimeout(function() {
      const $valorInput = $('[data-input="textarea"]').val(),
            $caracteres = $valorInput.length,
            $palavras = $valorInput.split(' ').length;
    
      $($contadorCaracteres).text($caracteres);
      $($contadorPalavras).text($palavras);
    }, 200);
  });
})();