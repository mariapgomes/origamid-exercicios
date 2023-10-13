// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudaCor() {
  document.body.classList.toggle('ativo')
}

setInterval(mudaCor, 2000);
//mudaCor()

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no resetar).

const btnIniciar = document.querySelector('[data-btn="iniciar"]'),
      btnPausar = document.querySelector('[data-btn="pausar"]'),
      btnResetar = document.querySelector('[data-btn="resetar"]'),
      contagem = document.querySelector('[data-contagem]');

let contador = 0
let funcaoAtiva = false;

btnIniciar.addEventListener('click', cronometro);

function cronometro() {

  if(funcaoAtiva !== true) {
    funcaoAtiva = true;

    const iniciaCronometro = setInterval(() => {
      contador++;
      contagem.innerText = contador;
    },1000);
  
    btnPausar.addEventListener('click', () => {
      clearTimeout(iniciaCronometro);
      funcaoAtiva = false;
    });
  
    btnResetar.addEventListener('dblclick', resetaCronometro);
    function resetaCronometro() {
      clearTimeout(iniciaCronometro);
      contador = 0;
      contagem.innerText = contador;
      funcaoAtiva = false;
    }
  }
};
