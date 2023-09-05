let quadrado = {
  lados: 4, //Isso é uma propriedade comporta de chave: valor
  area: function(lado) { //Isso é um método (uma função dentro de um objeto)
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado; //O this se refere ao próprio objeto, dessa forma é possível alcançar qualquer valor que contenha nele.
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//OUTRA FORMA DE DECLARAR MÉTODOS

let quadrado1 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() { // Aqui a função pode também não conter um parâmetro
    return 5;
  }
}

console.log(quadrado1.cinco());

console.log(Math.random(1))

//EXERCÍCIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let dadosPessoais = {
  nome: 'Maria',
  sobrenome: 'Gomes',
  idade: 26,
  sexo: 'F',
  cidade: 'São Gonçalo'
}

console.log(dadosPessoais)

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
  console.log(`${this.nome} ${this.sobrenome}`)
}

console.log(dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 2000;

console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: 'labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      console.log(`O cachorro está latindo`)
    }
  }
}

console.table(cachorro)
cachorro.latir('homem')