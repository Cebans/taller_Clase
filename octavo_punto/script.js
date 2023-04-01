const form = document.querySelector('form');
const numerosInput = document.querySelector('#numeros');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numeros = numerosInput.value.split(',');
    let mensaje = '';

    numeros.forEach(numeroString => {
        const numero = parseInt(numeroString.trim());
        if (numero > 0 && Number.isInteger(numero)) {
            if (numero % 2 === 0) {
                mensaje += `El número ${numero} es par. `;
            } else {
                mensaje += `El número ${numero} es impar. `;
            }
        } else {
            mensaje += `El valor ${numeroString.trim()} no es un número entero positivo. `;
        }
    });

    resultado.textContent = mensaje;
    numerosInput.value = '';
});
