const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, square1,square3;
var backgroundImg
var bird, slingshot;

var gameState = "onSling";

var score = 0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    square1 = new Square(810, 350);
    block1 = new Block(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    square3 = new Square(810, 220);

    block3 =  new Block(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    block4 = new Block(760,120,150, PI/7);
    block5 = new Block(870,120,150, -PI/7);

    bird = new Bird(200,50);


    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
        background("black");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    square1.display();
    square1.score();
    block1.display();

    box3.display();
    box4.display();
    square3.display();
    square3.score();
    block3.display();

    box5.display();
    block4.display();
    block5.display();

    bird.display();
    
    
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, {x: 200, y: 50});
        slingshot.attach(bird.body);
    }
}
