// Variables 
var colums = document.getElementById('columns');
var cells = [['', '', '',''], ['', '', '',''], ['', '', '','']];




window.onload = function() {
  // Creación de las clases con array - etiqueta div 
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
      var newElement = document.createElement('div');
      newElement.id = 'cells[' + i + '][' + j + ']';
      newElement.className = 'cell';
      newElement.innerHTML = 'cells[' + i + '][' + j + ']';
      columns.appendChild(newElement);
    }
  }

  var i = 1;
  var j = 2;
    document.getElementById('cells[' + i + '][' + j + ']').classList.add('red');
 



  window .addEventListener('keyup', function(e) {
 
  
    var ascii = e.keyCode;
    console.log(ascii)
    if (ascii == 38) { // up
      i=i-1;
      j=j; 
      if (i>=0 && j>=0 && i<=2) { 

        document.getElementById('cells[' + i  + '][' + j + ']').classList.add('red');
      document.getElementById('cells[' + (i + 1) + '][' + j + ']').classList.remove('red');
    
      }

    }

    if (ascii == 40) { // down
      i=i+1;
      j=j;

      if (i>=0 && j>=0 && i<=2) { 
        document.getElementById('cells[' + i  + '][' + j + ']').classList.add('red');
        document.getElementById('cells[' + (i -1) + '][' + j + ']').classList.remove('red');
        
        }
      

    }

    if (ascii == 37) { // left
      i=i;
      j=j-1;

      if (i>=0 && j>=0 && j<=2) { 
        document.getElementById('cells[' + i  + '][' + j + ']').classList.add('red');
        document.getElementById('cells[' + i  + '][' + (j +1) + ']').classList.remove('red');
        
        }

    }

    if (ascii == 39) { // right
      i=i;
      j=j+1;
      
      if (i>=0 && j>=0 && j<=2) { 
        document.getElementById('cells[' + i  + '][' + j + ']').classList.add('red');
        document.getElementById('cells[' + i  + '][' + (j - 1) + ']').classList.remove('red');
        
        }

      

    }

  });
};
 
