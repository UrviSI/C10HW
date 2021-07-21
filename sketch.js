var seaimg, boatimgs;

function preload(){
  boatimgs = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(50,160,20,50);
  sea.addImage(seaimg);
  sea.velocityX = -3;
  ship = createSprite(200,270,20,50);
  ship.addAnimation("boat", boatimgs);
  ship.scale = 0.2
}

function draw(){
  background("white");
  if (sea.x<0){
    sea.x = sea.width/2;
  }
  drawSprites();
}