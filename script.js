let grid = 5;
/* let btnBlack =  document.querySelector(".preto");
  let btnOrange = document.querySelector(".laranja");
  let btnPink = document.querySelector(".rosa");
  let btnPurple = document.querySelector(".roxo"); */

for(let i = 0; i < grid; i += 1) {
  let lines = document.createElement('div');
  lines.classList.add('linhas');
  document.getElementById('pixel-board').appendChild(lines);
  
  for(let index = 0; index < grid; index += 1) {       /* Resolvido com ajuda do do Gean Antunes, da Turma 19-B */ 
    let column = document.createElement('div');
    column.classList.add('pixel');
    lines.appendChild(column);
  }
}

/* Mudar classe 'selected' */

let passBlack = document.getElementsByClassName('preto');
let passOrange = document.getElementsByClassName('laranja');
let passPink = document.getElementsByClassName('rosa');
let passPurple = document.getElementsByClassName('roxo');

let setColors = [passBlack, passOrange, passPink, passPurple];

for (let a = 0; a < setColors.length; i+=1) {
  
}