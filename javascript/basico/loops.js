// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let copasVencidas = ['1959', '1962', '1970', '1994', '2002']

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copasVencidas.forEach(function(ano) {
  console.log(`O brasil ganhou a copa de ${ano}`);
})


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let fruta = 0; fruta <= frutas.length-1; fruta++) {
  console.log(frutas[fruta])
  if(frutas[fruta] === 'Pera') {
    break; 
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta)

// !ATRIBUIÇÃO E TERNÁRIO

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll

var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito = (possuiCarro && possuiCasa) ? 'Crédito disponível' : 'Não possui crédito diponível';

console.log(darCredito);

// !ESCOPO

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
//console.log(cor, marca, portas); // Porque o const e let não saem de dentro do escomo como o var

// Como corrigir o erro abaixo?

const dois = 2; //Colocar o const no escopo pai
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
  if (numero === 5) 
  break
}

const total = 10 * numero;
console.log(total);
