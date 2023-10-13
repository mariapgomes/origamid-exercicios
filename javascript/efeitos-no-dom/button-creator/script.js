const controles = document.forms[0],
      codeCss= document.querySelector('.css'),
      btn = document.querySelector('.btn');

const estilos = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function reageMundancas(event) {
  const eventName = event.target.name,
        value = event.target.value;

  estilos[eventName](value);
  salvaValores(eventName, value)
  mostraCss();
}

controles.addEventListener('change', reageMundancas);

function salvaValores(name, value) {
  localStorage[name] = value;
}

function insereValores() {
  const propriedades = Object.keys(localStorage);

  propriedades.forEach(propriedade => {
    controles.elements[propriedade].value = localStorage[propriedade];
    estilos[propriedade](localStorage[propriedade]);
    mostraCss();
  })
}
insereValores();

function mostraCss() {
  codeCss.innerHTML = `<span>${btn.style.cssText.split('; ').join(';</span><span>')}`
}