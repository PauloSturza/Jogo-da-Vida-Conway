function botoes (){
  document.getElementById("startBtn").addEventListener('click', startGame);
  document.getElementById("pauseBtn").addEventListener('click', pauseGame);
  document.getElementById("clearBtn").addEventListener('click', clearGame);
  document.getElementById("randomBtn").addEventListener('click', randomGame);
}

function startGame(){
  rodando = true;
}

function pauseGame(){
  rodando = false;
}

function clearGame(){
  if(!rodando){
    grid = createGrid(cols, rows);  
  }
}

function randomGame() {
  if(!rodando){
    clearGame();
    let nextGrid = grid.map(row=>[...row]);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let valor = noise(i,j,frameCount);
        if(valor < 0.6) {
          nextGrid[i][j] = 0;
        } else {
          nextGrid[i][j] = 1;
        }
      }
    }
  grid = nextGrid;
  desenhaGrid();
  }
} 