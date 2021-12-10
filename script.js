let btnBlack = document.querySelector('.preto');
let btnOrange = document.querySelector('.laranja');
let btnPink = document.querySelector('.rosa');
let btnPurple = document.querySelector('.roxo');

let grid = 5;

for(let i = 0; i < grid; i += 1) {
  let lines = document.createElement('div');
  lines.classList.add('linhas');
  document.getElementById('pixel-board').appendChild(lines);
  
  for(let index = 0; index < grid; index +=1) {
    let column = document.createElement('div');
    column.classList.add('pixel');
    lines.appendChild(column);
  }
}


