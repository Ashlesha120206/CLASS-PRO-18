var monkey , monkey_running;
var invisibleGround;
var jungleImage;
var bananaImage, bananaGroup;
var obstacleImage, ObstacleGroup;
var score = 0;
var background;

function preload(){
  
   monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  jungleImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(70,320,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;
  
  invisibleGround = createSprite(200,370,800,2);
  invisibleGround.visible = false;
  
  bananaGroup = new Group();
  ObstacleGroup = new Group();
  
   background = createSprite(200,200,400,400);
   background.addImage("jungle", jungleImage);
   background.depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
   background.velocityX = -2;
   background.x = background.width/2;
  
   
}

function draw() {
  
  score = score + Math.round(getFrameRate()/20);
  fill("white");
  textSize(20);
  text("score :"+ score,550,50);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(background.x < 0){
    background.x = background.width/2;
  }
  
  monkey.collide(invisibleGround);
  
  drawSprites();
  spawnObstacle();
  spawnBanana();
}

 
function spawnObstacle() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,335,10,40);
    obstacle.addImage("stone", obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    
    //assign lifetime to the obstacle    
    obstacle.lifetime = 300;
    
    ObstacleGroup.add(obstacle);
  }
}

function spawnBanana() {
  if(frameCount % 60 === 0){
    var banana = createSprite(100,200,40,10);
    banana.x = Math.round(random(180,200));
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.velocityX = -2;
    banana.lifeTime = 300;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana);
    
    // var score = 0;
    // switch(score){
    //     case 10
    // }
    
  }
}
 


