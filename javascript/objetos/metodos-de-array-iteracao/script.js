// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso
const listaCursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(listaCursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const desc = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelectorAll('.horas').innerText;
  return {
    titulo, //quando a chave tem o mesmo nome que a variável pode-se colocar o nome direto sem repetir.
    descricao: desc,
    aulas,
    horas
  }
});

console.log(objetosCurso)

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter(n => n > 100);
console.log(maioresQue100);


// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const possuiOInstrumento = instrumentos.some((instrumento) => instrumento === 'Baixo');
console.log(possuiOInstrumento);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const somaCompras = compras.reduce((anterior, item) => {
  const precoLimpo = +item.preco.replace(',', '.').split('R$ ').join('');
  return anterior + precoLimpo;
}, 0);

console.log(somaCompras);
