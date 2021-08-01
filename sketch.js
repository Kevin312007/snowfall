
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var snowFall=[]


function preload(){
snowImage=loadImage("snow2.jpg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
    if(frameCount%150===0){
      for(var i=0;i<=100;i++){
        snowFall.push(new Snow(random(0,windowWidth-50),random(0,windowHeight)))

      }
      
    }
}

function draw() {
  Engine.update(engine);
  background(snowImage); 
  for(var i=0;i<=snowFall.length;i++){snowFall[i].display()}
  drawSprites();
  for (var i=0;i<snowFall.length;i++){
    snowFall[i].display()
  }

}
