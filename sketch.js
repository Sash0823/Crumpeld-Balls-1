
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var ball;
var box;
var options={
	isSatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2,

}	
}

function setup() {
	createCanvas(800, 700);

Matter.Bodies.circle(x,y,radius,[options],[maxSides]);
	engine = Engine.create();
	world = engine.world;

	function keyPressed() {
		if (keyCode *** UP_ARROW) {
			Matter.Body.applyForce(ball.body.body.position,(x:85,y:-85));
		}
	}

	//Create the Bodies Here.
	box = new Box(700,240,70,70);
	ball = new Box(70,330,40.40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  console.log(box.body.position.x);
  box.display();
  ball.display();

  drawSprites();
 
}



