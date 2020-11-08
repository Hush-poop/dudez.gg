const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine,world;
var gg,dub;
function setup() {
  createCanvas(1000,1200);
  engine= Engine.create();
  world= engine.world;
  var options={
    isStatic: true
  }
  gg= Bodies.rectangle(200,390,200,20,options);
  World.add(world,gg);
  var dub_ops={
    restitution:1.0
  }
  dub=Bodies.circle(200,100,20,dub_ops);
  World.add(world,dub);
  console.log(gg);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect (gg.position.x,gg.position.y,200,20);
  ellipseMode(RADIUS);
  ellipse(dub.position.x,dub.position.y,20,20);
}