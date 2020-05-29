const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var bird, slingshot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    block8 = new Box(630, 235, 50, 60);
    block9 = new Box(660, 235, 50, 60);
    block10 = new Box(690, 235, 50, 60);
    block11 = new Box(720, 235, 50, 60);
    block12 = new Box(750, 235, 50, 60);
    block13 = new Box(660, 195, 50, 60);
    block14 = new Box(690, 195, 50, 60);
    block15 = new Box(720, 195, 50, 60);
    block16 = new Box(690, 155, 50, 60);


    bird = new Bird(200,40);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
    ground = new Ground(690, 300, 270, 20);
}

function draw(){

   background(0);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

     bird.display();    

}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


