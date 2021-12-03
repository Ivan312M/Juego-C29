const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var suelo;
var cuerda;
var fruta;
var frutaCuerda;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  /*var frutaOption = {
    density: 0.001
  };*/

  suelo = new Floor (200, 690, 600, 20);
  fruta = Bodies.circle(300, 300, 20);
  cuerda = new Rope (7, {x: 245, y: 30});
  Matter.Composite.add(cuerda.body, fruta);
  frutaCuerda = new Link(cuerda, fruta);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  suelo.show();
  cuerda.show();
  ellipse(fruta.position.x, fruta.position.y, 20, 20);
}




