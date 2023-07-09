// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const classeAtivo = document.querySelector('.ativo');
console.log(classeAtivo);

// Retorne a linguagem do navegador

const idiomaNavegador = navigator.language;
console.log(idiomaNavegador);

// Retorne a largura da janela 

const larguraJanela = innerWidth;
console.log(larguraJanela);

// Retorne a largura da janela 

const alturaJanela = innerHeight;
console.log(alturaJanela);