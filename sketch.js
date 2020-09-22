/*var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score;



var PLAY= 1;
var END = 0;

var gameState = PLAY;*/

var background

var car1;

function preload() {
  /*trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");*/
  trackImg = loadImage("track1.jpg");

  carImg = loadImage("car1.png");

  coinImg = loadImage("coin1.png");

  car2Img = loadImage("car2.jpg");
  car3Img = loadImage("car3.png");
  car4Img = loadImage("car4.jpg");
  car5Img = loadImage("car5.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  /*  trex = createSprite(50, 180, 20, 50);
   trex.addAnimation("running", trex_running);
   trex.scale = 0.5;*/
  track = createSprite(width / 2, height / 2, 100, height)
  track.addImage("track", trackImg);
  track.velocityY = 4;
  track.height / 2;

  track.scale = 2;

  car1 = createSprite(width / 2, height - 100, 10, 10);
  car1.addImage("car", carImg);
  car1.scale = 0.7;

  /*ground = createSprite(200, 180, 400, 20);
  ground.x = ground.width / 2;
  ground.addImage("ground", groundImage);
  ground.velocityX = -2;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.x = invisibleGround.width / 2;
  invisibleGround.visible = false;

  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  score = 0

 */


}

function draw() {
  background(180);

  /* if (gameState === PLAY ) { */

  /* camera.x = trex.x + 200;

  score = score + Math.round(getFrameRate() / 60);
  text("Score: " + score, 500, 50);*/

  if (track.y > height) {
    track.y = height / 2;
  }

  if (keyDown("LEFT_ARROW")) {
    car1.x = car1.x - 5;

  }

  if (keyDown("RIGHT_ARROW")) {
    car1.x = car1.x + 5;

  }

  camera.position.y = car1.y;



  /*if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleGround);

  if(trex.collide(obstaclesGroup)){
    gameState===END;
  }
*/
  /* }else if(gameState===END){ */

  /* trex.addAnimation("trex_collided.png");

  obstaclesGroup.velocityX = 0;
  cloudsGroup.velocityX = 0;

  ground.velocityX = 0;

  var gameOver = createSprite(200, 180, 10, 10);
  var restart = createSprite(200, 220, 10, 10);
  gameOver.addAnimation("gameOver.png");
  restart.addAnimation("restart.png"); */
  //}



  /* if(keyDown(restart)){
    gameState===PLAY;
  } */





  spawnCars();
  addCoins();


  drawSprites();
}

function addCoins() {
  if (frameCount % 60 === 0) {
    var coin = createSprite(random(width / 2 - 100, width / 2 + 100), 100)
    coin.addImage(coinImg);
    coin.velocityY = 4;
    coin.scale = 0.3;
  }
}

function spawnCars() {
  if (frameCount % 90 === 0) {
    var car2 = createSprite(random(width / 2 - 100, width / 2 + 100), 100)
    car2.scale = 0.5;
    car2.velocityY = 4;


    var rand = Math.round(random(2, 5));
    console.log(rand);

    switch (rand) {

      case 2: car2.addImage(car2Img);
        break;
      case 3: car2.addImage(car3Img)
        break;
      case 4: car2.addImage(car5Img)
        break;
      case 5: car2.addImage(car5Img)
        break;
      default: break;
    }


  }
}

/* function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {

    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudImage);

    cloud.scale = 0.5;
    cloud.velocityX = -3;

    //assign lifetime to the variable
    cloud.lifetime = 300;

    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;

    //add each cloud to the group
    cloudsGroup.add(cloud);
  }/*
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -3;

    //generate random obstacles
    var rand = Math.round(random(1, 6));

    switch (rand) {
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
      case 3: obstacle.addImage(obstacle3);
        break;
      case 4: obstacle.addImage(obstacle4);
        break;
      case 5: obstacle.addImage(obstacle5);
        break;
      case 6: obstacle.addImage(obstacle6);
        break;
      default: break;
    }

    //assign scale and lifetime to the obstacle
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;

    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
} */