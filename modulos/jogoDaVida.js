function jogoDaVida ( grid, cols, rows ){
    
    let nextGrid = grid.map(row=>[...row]);
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let total = 0;
        for( let x = -1; x <= 1; x++ ){
          for( let y = -1; y <= 1; y++ ){
            if( x === 0 && y === 0 ) continue;
            if(i+x>0 && j+y>0 && i+x<cols && j+y<rows){
              total += grid[i+x][j+y]
            }
          }
        }
        if ( total === 3 && grid[i][j] === 0 ){
          nextGrid[i][j] = 1;
        } else if ( total <= 1 &&  grid[i][j] === 1 ) {
          nextGrid[i][j] = 0;
        } else if ( total > 3 &&  grid[i][j] === 1 ) {
          nextGrid[i][j] = 0;
        } else if ( total <=3 && total >= 2 && grid[i][j] === 1 )
          nextGrid[i][j] = 1;
      }
    }
  return nextGrid;
}