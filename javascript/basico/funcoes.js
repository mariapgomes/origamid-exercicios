// Crie uma função para verificar se um valor é Truthy

function verificaTruthy (valor) {
  return !!valor
}

console.log(verificaTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calculaPerimetro (lado) {
  return lado * 4
}

console.log(calculaPerimetro(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Maria da Penha', 'Gomes dos Santos'));


// Crie uma função que verifica se um número é par

function verificaPar (numero) {
  if (numero % 2 === 0) {
    return `É par`;
  } else {
    return`É impar`;
  }
}

console.log(verificaPar(5));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function retornaTipo (valor) {
  console.log(typeof valor);
}
retornaTipo('5');

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
  console.log(`Maria Gomes`)
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
  
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }

  return jaVisitei(20)
}
console.log(precisoVisitar(20));

