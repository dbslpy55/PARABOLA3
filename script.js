const pantalla = document.getElementById('pantalla');
const botones = document.querySelector('.buttons');
let entrada = '';

botones.addEventListener('click', evento => {
  const boton = evento.target;

  if (boton.hasAttribute('data-numero')) {
    agregarNumero(boton.textContent);
  }

  if (boton.hasAttribute('data-accion')) {
    const accion = boton.getAttribute('data-accion');
    if (accion === 'limpiar') limpiarPantalla();
    if (accion === 'borrar') borrarUltimo();
    if (accion === 'operador') agregarOperador(boton.textContent);
    if (accion === 'calcular') calcularResultado();
  }
});

function agregarNumero(numero) {
  if (numero === '.' && entrada.endsWith('.')) return;
  entrada += numero;
  actualizarPantalla();
}

function agregarOperador(op) {
  if (entrada === '' || /[+\-×÷]$/.test(entrada)) return;
  entrada += op;
  actualizarPantalla();
}

function limpiarPantalla() {
  entrada = '';
  actualizarPantalla();
}

function borrarUltimo() {
  entrada = entrada.slice(0, -1);
  actualizarPantalla();
}

function calcularResultado() {
  try {
    let resultado = eval(entrada.replace(/×/g, '*').replace(/÷/g, '/'));
    entrada = resultado.toString();
    actualizarPantalla();
  } catch {
    pantalla.value = 'Error';
  }
}

function actualizarPantalla() {
  pantalla.value = entrada;
}
