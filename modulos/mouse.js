
function mouseDragged(){
  if(!rodando){
    // Calcula qual célula foi clicada
    let i = floor(mouseX / resolution);
    let j = floor(mouseY / resolution);

    // Verifica se está dentro dos limites do grid
    if (i >= 0 && i < cols && j >= 0 && j < rows) {
      // Alterna entre vivo e morto
      grid[i][j] = 1;
    }
  }
}

function mousePressed() {
  if(!rodando){
    // Calcula qual célula foi clicada
    let i = floor(mouseX / resolution);
    let j = floor(mouseY / resolution);

    // Verifica se está dentro dos limites do grid
    if (i >= 0 && i < cols && j >= 0 && j < rows) {
      // Alterna entre vivo e morto
      grid[i][j] = grid[i][j] === 0 ? 1 : 0;
    }
  }

}