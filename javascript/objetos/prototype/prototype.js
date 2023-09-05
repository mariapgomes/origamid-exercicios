// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.idade = idade
};
// Crie um método no protótipo que retorne o nome completo da pessoa

Pessoas.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const maria = new Pessoas('Maria', 'Gomes', 26);

console.log(maria.nomeCompleto());

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //'HTMLLIElement'
li.click; //'Function'
li.innerText; //'String'
li.value; //'Number'
li.hidden; //'Boolean'
li.offsetLeft; //'Number'
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //Retorna uma string dizendo o tipo primitivo de hidden => 'Boolean'
