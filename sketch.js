
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree,treeImg;
var stoneObj;
var boy,boyImg;
var slingShot;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 500);

	tree=createSprite(900,250,20,20);
	tree.addImage(treeImg);
	tree.scale=0.4;

	boy=createSprite(200,430,20,20);
	boy.addImage(boyImg);
	boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,500,2000,20);
	stoneObj = new Stone(145,372,50);
	
	slingShot = new Slingshot(stoneObj.body,{x:145,y:372});

	mango1 = new Mango(1000,150,60);
	mango2 = new Mango(900,130,50);
	mango3 = new Mango(800,100,40);
	mango4 = new Mango(950,200,60);
	mango5 = new Mango(750,250,50);
	mango6 = new Mango(834,162,40);
	mango7 = new Mango(1037,200,50);
	mango8 = new Mango(953,73,50);
	mango9 = new Mango(1104,156,60);
	mango10 = new Mango(700,200,40);
	mango11 = new Mango(830,239,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();

  ground.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.body.setPosition(stoneObj.body,{x:145, y:372})
        launcherObject.attach(stoneObj.body);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distanse=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distanse<=Lmango.r+Lstone.r){
			Matter.Body.setStatic(Lmango.body,false);
		}
}