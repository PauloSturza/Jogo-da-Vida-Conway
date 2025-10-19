let grid;
let cols;
let rows;
let resolution = 10;
let rodando = false;

function setup() {
  createCanvas(900, 1200);
  
  cols = width / resolution;
  rows = height / resolution;
  
  grid = createGrid(cols, rows);
  
  botoes();
}

function draw() {
  atualizarBotoes(rodando);
  if(rodando){
    background(255);
    frameRate(10);
    grid = jogoDaVida(grid,cols,rows);
    desenhaGrid( grid, cols, rows );
  } else {
    frameRate(60);
    background(255);
    desenhaGrid( grid, cols, rows );
  }
  
}
