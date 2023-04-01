const form = document.querySelector('form');
const input = document.querySelector('#valor');
const resultado = document.querySelector('#resultado');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const valor = input.value.trim();
  if (!isNaN(valor)) {
    resultado.textContent = 'El valor ingresado es un número.';
  } else {
    resultado.textContent = 'El valor ingresado es un texto.';
  }
});