let spr;
let groupSprites;
let GROUND_SPRITE_WIDTH = 60;
let GROUND_SPRITE_HEIGHT = 60;
let numGroundSprites;
let GRAVITY;
let player;
let pressedKeys = {};
let speed = 3;
let score;
let gameOver;

function createEnemy () {
    groupSprites = new Group();

    numGroundSprites = windowWidth / GROUND_SPRITE_WIDTH -20;

    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite1 = createSprite(
            windowWidth /6,
            windowHeight - windowHeight + 100,
            GROUND_SPRITE_WIDTH,
            GROUND_SPRITE_HEIGHT
        );
        var groundSprite2 = createSprite(
            windowWidth / 2,
            windowHeight - windowHeight + 100,
            GROUND_SPRITE_WIDTH,
            GROUND_SPRITE_HEIGHT
        );
        var groundSprite3 = createSprite(
            windowWidth / 1.25,
            windowHeight - windowHeight + 100,
            GROUND_SPRITE_WIDTH,
            GROUND_SPRITE_HEIGHT
        );
        var num = Math.random()*2;
        // var num2 = Math.random()*2
        groundSprite1.velocity.y=num;
        groundSprite2.velocity.y=num;
        groundSprite3.velocity.y=num;
        groupSprites.add(groundSprite1);
        groupSprites.add(groundSprite2);
        groupSprites.add(groundSprite3);
    }
}
  


window.setup = () => {
  // groupSprites = new Group()

  // numGroundSprites = windowWidth / GROUND_SPRITE_WIDTH -20;

  // for (var n = 0; n < numGroundSprites; n++) {
  //   var groundSprite1 = createSprite(
  //     windowWidth /6,
  //     windowHeight - windowHeight + 100,
  //     GROUND_SPRITE_WIDTH,
  //     GROUND_SPRITE_HEIGHT
  //   )
  //   var groundSprite2 = createSprite(
  //     windowWidth / 2,
  //     windowHeight - windowHeight + 100,
  //     GROUND_SPRITE_WIDTH,
  //     GROUND_SPRITE_HEIGHT
  //   )
  //   var groundSprite3 = createSprite(
  //     windowWidth / 1.25,
  //     windowHeight - windowHeight + 100,
  //     GROUND_SPRITE_WIDTH,
  //     GROUND_SPRITE_HEIGHT
  //   )
  //   var num = Math.random()*2
  //   // var num2 = Math.random()*2
  //   groundSprite1.velocity.y=num
  //   groundSprite2.velocity.y=num
  //   groundSprite3.velocity.y=num
  //   groupSprites.add(groundSprite1);
  //   groupSprites.add(groundSprite2);
  //   groupSprites.add(groundSprite3);
  // }
    
  score = 0;
  // setInterval(createEnemy,1000);
  createCanvas(windowWidth, windowHeight);
  GRAVITY = 1;
  player = createSprite(windowWidth/2, windowHeight-100, 30, 30);
  gameOver = false;
};





window.update = () => {
  let movement = createVector(0,0);

  if (keyIsPressed) {
    if (pressedKeys[UP_ARROW]){
      movement.y -= 1;
    }
    if (pressedKeys[DOWN_ARROW]) {
      movement.y += 1;
    }
    if (pressedKeys[LEFT_ARROW]) {
      movement.x -= 1;
    }
    if (pressedKeys[RIGHT_ARROW]) {
      movement.x += 1;
    }
  }
  movement.setMag(speed);
  player.x += movement.x;
  player.y += movement.y;

};


window.draw = () => {
  if (score % 500 === 0) {
    createEnemy();
  }
  if (gameOver){
    groupSprites.remove();
    player.remove();
    background(255);
    fill(0);
    textAlign(CENTER);
    textSize(50);
    text("You lasted: "   + score/100 + " seconds", camera.position.x, camera.position.y - 20);
    noLoop();
  } 
  else {
    background(60);
    drawSprites();
    update();
    score += 1;
    groupSprites.overlap(player,endGame);
  }
};
window.endGame = () => {
  gameOver = true;
};

window.keyReleased = () => {
  delete pressedKeys[keyCode];
};

window.keyPressed = () => {
  pressedKeys[keyCode] = true;
};



// function endGame() {
//   gameOver = True;
// }



//     // if (keyCode == RIGHT_ARROW) {
//     //   // player.setSpeed(1.5, 360);
//     //   player.x += 20
//     // }
//     // else if (keyCode == DOWN_ARROW) {
//     //   player.setSpeed(1.5, 90);
//     //   player.x += 0.2
//     // }
//     // else if (keyCode == LEFT_ARROW) {
//     //   player.setSpeed(1.5, 180);
//     //   player.x += 0.2
//     // }
//     // else if (keyCode == UP_ARROW) {
//     //   player.setSpeed(1.5, 270);
//     //   player.x += 0.2
//     // }
//     // else if (key == ' ') {
//     //   player.setSpeed(0, 0);
//     //   player.x += 0.2
//     // }
//     // return false;
//   }
