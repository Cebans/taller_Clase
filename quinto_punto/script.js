const form = document.querySelector('form');
const numeroInput = document.querySelector('#numero');
const resultado = document.querySelector('#resultado');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numero = parseInt(numeroInput.value);
    let mensaje = '';


    if (numero > 0 && Number.isInteger(numero)) {
        if (numero % 2 === 0) {
            mensaje = `El número ${numero} es par.`;
        } else {
            mensaje = `El número ${numero} es impar.`;
        }
    } else {
        mensaje = 'Por favor ingresa un número entero positivo.';
    }


    resultado.textContent = mensaje;
    numeroInput.value = '';
});
