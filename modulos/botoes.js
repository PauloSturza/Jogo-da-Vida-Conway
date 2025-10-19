function botoes(){
  document.getElementById("startBtn").addEventListener('click', startGame);
  document.getElementById("pauseBtn").addEventListener('click', pauseGame);
  document.getElementById("clearBtn").addEventListener('click', clearGame);
  document.getElementById("randomBtn").addEventListener('click', randomGame);
  
  // Inicializa os botões no estado correto
  atualizarBotoes(rodando);
}

function startGame(){
  rodando = true;
  loop();
  atualizarBotoes(rodando);
}

function pauseGame(){
  rodando = false;
  noLoop();
  atualizarBotoes(rodando);
}

function clearGame(){
  if(!rodando){
    grid = createGrid(cols, rows);
    redraw(); // Força o redesenho
    atualizarBotoes(rodando);
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
    redraw(); // Força o redesenho
    atualizarBotoes(rodando);
  }
}

// Função para atualizar as cores dos botões
function atualizarBotoes(rodando) {
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const clearBtn = document.getElementById('clearBtn');
  const randomBtn = document.getElementById('randomBtn');
  
  if (rodando) {
    // Jogo RODANDO: Pausar ativo, outros inativos
    startBtn.classList.remove('active');
    startBtn.classList.add('inactive');
    
    pauseBtn.classList.remove('inactive');
    pauseBtn.classList.add('active');
    
    clearBtn.classList.remove('active');
    clearBtn.classList.add('inactive');
    
    randomBtn.classList.remove('active');
    randomBtn.classList.add('inactive');
  } else {
    // Jogo PAUSADO: Iniciar, Aleatório e Limpar ativos
    startBtn.classList.remove('inactive');
    startBtn.classList.add('active');
    
    pauseBtn.classList.remove('active');
    pauseBtn.classList.add('inactive');
    
    clearBtn.classList.remove('inactive');
    clearBtn.classList.add('active');
    
    randomBtn.classList.remove('inactive');
    randomBtn.classList.add('active');
  }
}