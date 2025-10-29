# Jogo da Vida de Conway

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5.js&logoColor=white)

Uma implementação interativa do **Jogo da Vida de Conway** usando p5.js, com interface moderna e responsiva.

##  Sobre o Projeto

O **Jogo da Vida** é um autômato celular desenvolvido pelo matemático John Conway em 1970. Não é exatamente um "jogo" no sentido convencional, mas sim um sistema que evolui baseado em regras simples, criando padrões complexos e fascinantes.

###  Características

- **Interface moderna** com design gradiente e efeitos visuais
- **Controles intuitivos**: Iniciar, Pausar, Limpar e Gerar padrão aleatório
- **Interação com mouse** para criar células manualmente
- **Visualização em tempo real** da evolução dos padrões

##  Como Usar

### Online
[🔗 **Acesse a versão online aqui**](https://seu-usuario.github.io/jogo-da-vida-conway) *(adicione o link quando hospedar)*

### Localmente
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/jogo-da-vida-conway.git
```
2. Abra o arquivo abra a pasta do seu 

## Controles

- **Iniciar**: Começa a simulação

- **Pausar**: Para a simulação

- **Limpar**: Reinicia o grid completamente

- **Aleatório**: Gera um padrão aleatório de células

- **Mouse**: Clique para ativar/desativar células individualmente

 ## Tecnologias Utilizadas

- **p5.js** - Biblioteca para creative coding

- **HTML5** - Estrutura da página

- **CSS3** - Estilização moderna com gradientes e efeitos

- **JavaScript** - Lógica do jogo e interatividade

 Estrutura do Projeto
text
```bash
jogo-da-vida-conway/
│
├── index.html          # Página principal
├── sketch.js           # Configuração principal do p5.js
├── style.css           # Estilos da interface
├── README.md           # Este arquivo
└── modulos/            # Módulos JavaScript
    ├── botoes.js       # Controle dos botões
    ├── mouse.js        # Interação com mouse
    ├── desenhaGrid.js  # Renderização do grid
    ├── createGrid.js   # Criação da matriz
    └── jogoDaVida.js   # Lógica principal do jogo
```

## Regras do Jogo da Vida

### O jogo segue quatro regras simples:

- **Solidão**: Uma célula viva com menos de 2 vizinhos vivos morre

- **Superpopulação**: Uma célula viva com mais de 3 vizinhos vivos morre

- **Sobrevivência**: Uma célula viva com 2 ou 3 vizinhos vivos permanece viva

- **Reprodução**: Uma célula morta com exatamente 3 vizinhos vivos se torna viva

## Hospedagem

Para hospedar este projeto como página web:

- Faça push para o repositório GitHub

- Vá em Settings → Pages

- Em Source, selecione a branch principal (main/master)

- Salve e aguarde alguns minutos

- Seu projeto estará disponível em: https://seu-usuario.github.io/jogo-da-vida-conway

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs

- Sugerir novas funcionalidades

- Fazer pull requests com melhorias
