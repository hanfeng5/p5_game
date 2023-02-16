let spr

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  spr = createSprite(width / 2, height / 2, width /3, height/3);
  spr.shapeColor = color(255)
}

window.draw = () => {
  background(60);
  drawSprites()
}