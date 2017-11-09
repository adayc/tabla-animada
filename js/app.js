
// Declaración de variables
var board = document.querySelector('.board-js');
document.getElementById('c7').style.backgroundColor = 'red';

// Declaramos las funciones en el momento en que se carga la ventana del navegador
window.onload = function() {
  board.addEventListener('onkeypress', addColor);
};


function addColor(event) {
  document.getElementById('c6').style.backgroundColor = 'red';
  
};
