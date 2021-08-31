const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,100,50);
    box2 = new Box(150, 380, 70, 50);
    ground = new Ground(200,height,400, 10);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}