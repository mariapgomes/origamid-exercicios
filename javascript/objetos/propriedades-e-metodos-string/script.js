// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0,
    recebimentoTotal = 0;
transacoes.forEach((transacao) => {
  if(transacao.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += +transacao.valor.slice(3);
  } else {
    recebimentoTotal += +transacao.valor.slice(3);
  }
})
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlNovo = html.split('span').join('a');
console.log(htmlNovo);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totaTaxas = 0;
transacoes1.forEach((transacao) => {
  if(transacao.toLowerCase().includes('taxa'))
    totaTaxas++
})
console.log(totaTaxas);
