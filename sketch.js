
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bground, boy, stone, mango, tree;
var ground, higherground;


function preload(){
  boy  = loadImage("./assets/boy.png")
  tree  = loadImage("./assets/tree.png")
  mango  = loadImage("./assets/mango.png")
  stone  = loadImage("./assets/stone.png")
  bground  = loadImage("./assets/2.jpg")
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250, height - 12, width, 20);
  higherground = new Ground(900, 150, 100, 10);
  boy = new Boy(800, 80, 100, 100)
  mango = new Mango(150, 300, 50, 50)
  tree = new Tree(150, 150, 50, 100)
  stone = new Stone(800, 80, 50, 50)

  //boy = createSprite(270,80,100,100);
  //boy.addImage("boyImg",boy);
  //boy.scale = 0.5;


}


function draw() {
  background(bground);
  Engine.update(engine);


  ground.show()
  stone.show()
  mango.show()
  boy.show()
  tree.show()
}

