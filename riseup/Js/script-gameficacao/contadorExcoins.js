var excoins = 0; 

function atualizarExcoins() {
  document.getElementById('excoins').innerText = 'EXCOINS: ' + excoins;
}

function recolherExcoins() {
  excoins += 10;
  atualizarExcoins();
}

function convidarAmig(){
  excoins += 15;
  atualizarExcoins();
}

function feedback(){
  excoins +=20;
  atualizarExcoins();
}

document.getElementById('recolherBtn').addEventListener('click', recolherExcoins);
document.getElementById('modal3').querySelectorAll('.botao')[0].addEventListener('click', convidarAmig);
document.getElementById('modal3').querySelectorAll('.botao')[1].addEventListener('click', convidarAmig);
document.getElementById('modal4').querySelector('.botao').addEventListener('click', feedback);

atualizarExcoins();