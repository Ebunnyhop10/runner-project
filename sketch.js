var track
var trackIMG
var runner
var runnerAni
var leftLine
var rightLine

function preload(){
 trackIMG = loadImage("path.png")
 runnerAni = loadAnimation("Runner-1.png","Runner-2.png") ;
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  track = createSprite(200,200,300,400);
  track.addImage("track", trackIMG);
  track.scale = 1;

  runner = createSprite(200,300,30,30);
  runner.addAnimation("run", runnerAni);
  runner.scale = 0.1;

  leftLine = createSprite(50,200,10,400);
  leftLine.visible=false;

  rightLine = createSprite(360,200,10,400)
  rightLine.visible=false;
}

function draw() {
  background(0);

  runner.collide(leftLine);
  runner.collide(rightLine);
  
  track.velocityY = 4;

  if(track.y > 400){
   track.y = 1;
  }

  if(keyDown("left")){
    runner.x = runner.x - 5
  }

  if(keyDown("right")){
    runner.x = runner.x + 5
  }
  drawSprites();
}
