const form = document.querySelector('form');
const textarea = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = textarea.value.trim();
  const cantidad = texto.length;
  resultado.textContent = `El texto ingresado tiene ${cantidad} caracteres.`;
});
