
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeObject,ground,stoneObject, mango1
var boyImage, boySprite

function preload(){
	boyImage = loadImage("Images/boy.png")
}

function setup() {
	createCanvas(900, 700);

	boySprite=createSprite(200,570,10,10);
	boySprite.addImage(boyImage)
	boySprite.scale=0.15

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(450,680,900,20)

	treeObject = new Tree(650,430,400,500)
	
	mango1 = new Mango(600,500)

	stoneObject = new Stone(120,500,75,75)

	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  treeObject.display()
  mango1.display()
  ground.display()
  stoneObject.display()
  
 
}



