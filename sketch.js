var monkeyImg, monkey;
var logImg, log;
var coinImg, coin;
var tree, treeImg;
var gameState = "play";

function preload(){
  monkeyImg = loadImage("monkey.png");
  logImg = loadImage("log.png");
  coinImg = loadImage("coin.png");
  treeImg = loadImage("tree.png");
}

function setup() {0
  createCanvas(600, 600);
  tree = createSprite(300, 300);
  tree.addImage(treeImg);
  tree.velocityY = 1;

  monkey = createSprite(300, 300);
  monkey.addImage(monkeyImg);
  monkey.scale = 0.2;
  
  logGroup = new Group();
  logGroup.add(log);
  coinsGroup = new Group();
  coinsGroup.add(coin);
}

function draw() 
{
 background(200);
 
 if(gameState == "play"){

  if(monkey.y > 600)
 {
   gameState = "end"
 }

 if(tree.y > 400)
 {
   tree.y = 300
 }

 if(keyDown == ("up"))
 {
  monkey.velocityY = -10 
 }

 if(keyDown == ("left"))
 {
   monkey.x = monkey.x - 3;
 }

 if(keyDown == ("right"))
 {
  monkey.x = monkey.x + 3;
 }

 if(logGroup.isTouching(monkey))
 {
  monkey.velocityY = 0;
 }

 spawnElements();
 drawSprites();
 }

 if(gameState == "end")
 {
  textSize(40);
  fill("blue");
  stroke ("green");
  textSize("GAME OVER!! :(", 300, 300);
 }

function spawnElements(){
    if(frameCount % 200 == 0){
    log = createSprite(300, 300)
    log.addImage(logImg);
    log.velocityY = 1;
    log.x = Math.round(random(120, 400));
    logsGroup.add(log);
    coin.x = log.x;

    coin = createSprite(300, 300);
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.velocityY = 1;
    coinsGroup.add(coin);

    log.lifetime = 800;
    coin.lifetime = 800;

  }
}

