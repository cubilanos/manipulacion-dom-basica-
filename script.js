const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.getElementById('Resultado');

form.addEventListener('submit', sumarImputValues)

function sumarImputValues (event){
    event.preventDefault() //importante para que no recarue l apágina por defecto
    A = Number(input1.value);
    B = Number(input2.value);
    const suma = A+B;

    pResultado.innerText = `Resultado: ${suma}`;
}