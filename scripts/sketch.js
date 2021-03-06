let imagemCenario
let cenario

let imagemPersonagem
let personagem

let inimigo
let imagemInimigo

let somDoJogo
let somDoPulo

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 416],
  [104, 416],
  [208, 416],
  [312, 416],
  [0, 520],
  [104, 520],
  [208, 520],
  [312, 520],
  [0, 624],
  [104, 624],
  [208, 624],
  [312, 624],
]

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]


function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  cenario = new Cenario(imagemCenario, 2)
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270)
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 55, 55, 106, 106)
  frameRate(30)
  //somDoJogo.loop()

}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

function draw() {
  cenario.exibe()
  cenario.move()
  personagem.exibe()
  personagem.aplicaGravidade()
  inimigo.exibe()
  inimigo.move()

  if(personagem.estaColidindo(inimigo)){
    console.log("colidiu")
    noLoop()
  }

}

