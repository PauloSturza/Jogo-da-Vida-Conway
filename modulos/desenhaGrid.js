function desenhaGrid ( grid, cols, rows ) {
  
    for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      
      if (grid[i][j] == 1) {
        fill(255);
      } else {
        fill(0);
      }
      stroke(50);
      rect(x, y, resolution, resolution);
    }
  }
}
  