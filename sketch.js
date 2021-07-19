const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,left,right,top_wall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground=new Ground(200,390,400,20);
  left=new Ground(10,200,20,400);
  right=new Ground(390,200,20,400);
  top_wall=new Ground(200,10,400,20);

  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,ball_options)
  World .add(world,ball)
  ellipseMode(RADIUS)
}

function draw() 
{
  background(51);
  ellipse (ball.position.x,ball.position.y,20)
  Engine.update(engine);
ground.show();
left.show();
right.show();
top_wall.show();
}

