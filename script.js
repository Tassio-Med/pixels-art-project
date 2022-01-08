let grid = 5;

for(let i = 0; i < grid; i += 1) {
  let lines = document.createElement('div');   lines.classList.add('linhas');
  document.getElementById('pixel-board').appendChild(lines);
    for(let index = 0; index < grid; index += 1) {       /* Resolvido com ajuda do do Gean Antunes, da Turma 19-B */ 
      let lines = document.createElement('div');
      lines.classList.add('pixel');
      document.getElementById('pixel-board').appendChild(lines);
  
  }
}


/* Mudar classe 'selected' */

let palletColor = document.querySelector('#color-palette');
let colorSelected = document.querySelector('.selected');

function changeClass(event) {          /* ---> Resolvido com a ajuda do Kael caldeira - Turma 19-B */
  colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
  palletColor.addEventListener('click', changeClass);  


/* Mudar a cor do pixel */

function changeColor(event) {
  let selectedClass = document.querySelector('.selected');  /* --> /* Resolvido com ajuda do do Gean Antunes, da Turma 19-B */  
  event.target.style.backgroundColor = window.getComputedStyle(selectedClass).getPropertyValue('background-color');
}
document.querySelector('#pixel-board').addEventListener('click', changeColor);