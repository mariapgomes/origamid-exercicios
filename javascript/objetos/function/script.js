// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce.
const paragrafos = document.querySelectorAll('p');

function caracteres() {
  let totalCaracteres = 0

  for (let i = 0; i <= paragrafos.length - 1; i++) {
    paragrafos[i].innerText.split('').reduce((somador, atual) => {
      totalCaracteres += 1
    }, 0);
  }
  console.log(totalCaracteres)
}
caracteres()

//Opção utilizando o call().

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo. (acrescentei o parâmetro pai e anteesDe para que o elemento posssa ser interido no html na ordem que desejar).

function criaElemento(tag, classe, conteudo, pai, antesDe) {
  let novoElemento = document.createElement(tag);
  let elementoPai = document.querySelector(pai);
  let irmao = document.querySelector(antesDe);
  
  novoElemento.classList.add(classe);
  novoElemento.innerText = conteudo;
  antesDe ? elementoPai.insertBefore(novoElemento, irmao) : elementoPai.appendChild(novoElemento);
}
//criaElemento('h1', 'titulo', 'Novo Elemento', 'body');

// Crie uma nova função utilizando a anterior como base, essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico (deixei os parâmetros pai e antestDe dinâmicos também na segunda opção).

function criaH1(conteudo) {
  criaElemento('h1', 'titulo', conteudo, 'body', 'section');
}

criaH1('H1 criado pela segunda função');

//Opção usando o .bind().

const tituloH1 = criaElemento.bind(null, 'h1', 'titulo');

tituloH1('titulo novo', 'section', 'p');