const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies

var engine,world,ball,ground;

function setup() {
  createCanvas(400,400);
 engine=Engine.create()
 world=engine.world
var ball_options={ 
//isStatic: true
restitution: 1.0

}

var ground_options={ 
  isStatic: true
  
  
  }

 ball=Bodies.circle(200,100,20, ball_options)
 World.add(world,ball)
 console.log(ball.position.y)

 ground=Bodies.rectangle(200,390,400,20, ground_options)
 World.add(world,ground)
}

function draw() {
  background(0);
  Engine.update(engine) 
  ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y, 20, 20);
 rectMode(CENTER)
  rect(ground.position.x,ground.position.y, 400, 20);

 
}