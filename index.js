let spr
let groupSprites
let GROUND_SPRITE_WIDTH = 60
let GROUND_SPRITE_HEIGHT = 60
let numGroundSprites
let GRAVITY
let player

window.setup = () => {
    createCanvas(windowWidth, windowHeight);
    //   spr = createSprite(width / 2, height / 2, width /3, height/3);
    //   spr.shapeColor = color(255)
    GRAVITY = 1;
    groupSprites = new Group()

    numGroundSprites = windowWidth / GROUND_SPRITE_WIDTH -10;

    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite1 = createSprite(
            windowWidth /6,
            windowHeight - windowHeight + 100,
            GROUND_SPRITE_WIDTH,
            GROUND_SPRITE_HEIGHT
        )
        var groundSprite2 = createSprite(
            windowWidth / 2,
            windowHeight - windowHeight + 100,
            GROUND_SPRITE_WIDTH,
            GROUND_SPRITE_HEIGHT
        )
        var groundSprite3 = createSprite(
            windowWidth / 1.25,
            windowHeight - windowHeight + 100,
            GROUND_SPRITE_WIDTH,
            GROUND_SPRITE_HEIGHT
        )
        var num = Math.random()*2
        // var num2 = Math.random()*2
        groundSprite1.velocity.y=num
        groundSprite2.velocity.y=num
        groundSprite3.velocity.y=num
        groupSprites.add(groundSprite1);
        groupSprites.add(groundSprite2);
    }
    player = createSprite(windowWidth/2, windowHeight-100, 30, 30)
}

window.draw = () => {
  background(60);
  drawSprites()
}

 window.keyPressed = () => {
    if (keyCode == RIGHT_ARROW) {
      player.setSpeed(1.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
      player.setSpeed(1.5, 90);
    }
    else if (keyCode == LEFT_ARROW) {
      player.setSpeed(1.5, 180);
    }
    else if (keyCode == UP_ARROW) {
      player.setSpeed(1.5, 270);
    }
    else if (key == ' ') {
      player.setSpeed(0, 0);
    }
    return false;
  }