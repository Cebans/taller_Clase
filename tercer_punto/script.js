const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const edadInput = document.querySelector('#edad');
const resultado = document.querySelector('#resultado');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = nombreInput.value.trim();
  const edad = Number(edadInput.value.trim());
  if (edad >= 18) {
    resultado.textContent = `${nombre}, eres mayor de edad.`;
  } else {
    resultado.textContent = `${nombre}, no eres mayor de edad.`;
  }
});
