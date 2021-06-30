
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1
var dustbin1,dustbin2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground1= new ground(600,685,1200)
	
	
	dustbin1= new dustbin(1110,620,20,70,)
	dustbin3= new dustbin(860,620,20,70)
	dustbin2= new dustbin(985,665,250,20)
	
	paper1=new paper()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
 
  dustbin1.display()
	dustbin3.display()
	dustbin2.display()
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.position,{x:85,y:-85});
	}
}

