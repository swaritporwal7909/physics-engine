const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  var options={
    isStatic:true
  }
 
  ground=Bodies.rectangle(400,390,800,20,options)
  World.add(world,ground)

 var balloptions={
   restitution:1
 }
  ball=Bodies.circle(100,200,20,balloptions)
  World.add(world,ball)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
 
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,20)

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}