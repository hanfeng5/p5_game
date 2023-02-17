let spr
let groupSprites
let GROUND_SPRITE_WIDTH = 100
let GROUND_SPRITE_HEIGHT = 100
let numGroundSprites
let GRAVITY

window.setup = () => {
    createCanvas(windowWidth, windowHeight);
    //   spr = createSprite(width / 2, height / 2, width /3, height/3);
    //   spr.shapeColor = color(255)
    GRAVITY = 1;
    groupSprites = new Group()

    numGroundSprites = windowWidth / GROUND_SPRITE_WIDTH +15

    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(
            windowWidth /2,
            windowHeight - windowHeight+150 ,
            GROUND_SPRITE_WIDTH,
            GROUND_SPRITE_HEIGHT
        )
        groundSprite.velocity.y=GRAVITY
        groupSprites.add(groundSprite)
    }
}

window.draw = () => {
  background(60);
  drawSprites()
}