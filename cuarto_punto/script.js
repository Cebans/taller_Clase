const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const materiaInput = document.querySelector('#materia');
const nota1Input = document.querySelector('#nota1');
const nota2Input = document.querySelector('#nota2');
const nota3Input = document.querySelector('#nota3');
const resultado = document.querySelector('#resultado');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = nombreInput.value.trim();
  const materia = materiaInput.value.trim();
  const nota1 = Number(nota1Input.value.trim());
  const nota2 = Number(nota2Input.value.trim());
  const nota3 = Number(nota3Input.value.trim());
  const promedio = (nota1 + nota2 + nota3) / 3;
  let mensaje = '';
  let color = '';


  if (promedio >= 3.0) {
    mensaje = `${nombre}, has aprobado la materia de ${materia} con un promedio de ${promedio.toFixed(1)}. ¡Felicitaciones!`;
    color = 'green';
  } else {
    mensaje = `${nombre}, has reprobado la materia de ${materia} con un promedio de ${promedio.toFixed(1)}. Debes esforzarte más en la siguiente oportunidad.`;
    color = 'red';
  }


  resultado.style.color = color;
  resultado.textContent = mensaje;


  nombreInput.value = '';
  materiaInput.value = '';
  nota1Input.value = '';
  nota2Input.value = '';
  nota3Input.value = '';
});
