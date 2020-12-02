
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var stand1;
var polygon1;
var launcher;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stand1=new Ground(400,540,250,10);
box1=new Box(400,520,30,30);
box2=new Box(433,520,30,30);
box3=new Box(368,520,30,30);
box4=new Box(465,520,30,30);
box5=new Box(338,520,30,30);
//box6=new Box(490,520,30,30);
//box7=new Box(308,520,30,30);
	
box8=new Box(415,490,30,30);
box9=new Box(445,490,30,30);
//box10=new Box(475,490,30,30);
box11=new Box(385,490,30,30);
box12=new Box(355,490,30,30);
//box13=new Box(325,490,30,30);
box14=new Box(400,460,30,30);
box15=new Box(430,460,30,30);
box16=new Box(370,460,30,30);
box17=new Box(415,430,30,30);
box18=new Box(385,430,30,30);
box19=new Box(400,400,30,30);

polygon1=new Polygon(50,200);
launcher=new Launcher(polygon1.body,{x:50,y:200});
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  stand1.display();
box1.display();  
box2.display(); 
box3.display(); 
box4.display(); 
box5.display(); 
//box6.display(); 
//box7.display(); 
box8.display(); 
box9.display(); 
//box10.display(); 
box11.display(); 
box12.display(); 
//box13.display(); 
box14.display(); 
box15.display(); 
box16.display();
box17.display(); 
box18.display();
box19.display();
polygon1.display();
 launcher.display(); 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
  if(keyCode === 32){
      launcher.attach(stone1.body);
  }
}