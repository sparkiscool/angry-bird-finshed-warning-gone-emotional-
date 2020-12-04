const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world
var box1, pig1;
var backgroundImg,platform;
var constraintlog
var chain1
var gamestate = "set"
var bg
var score = 0
function preload() {
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    

    bird = new Bird(200,50);
    sling1  = new slingshot(bird.body,{x:200,y:50})
}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //constraintlog.display();
    sling1.display()
    pig3.score()
    pig1.score()
    //gettime();
    fill("white")
    text("IQ = " + score,width - 200,50)

}
function mouseDragged(){


//if(gamestate!="somethingelse"){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    
//}










    

  }
  function mouseReleased(){
      sling1.fly();
      gamestate = "somethingelse"
  }
  function keyPressed(){
if(keyCode === 32 && bird.body.speed < 1){
    sling1.attatch(bird.body)
    bird.trajectory = []
    Matter.Body.setPosition(bird.body,{x:200,y:50})

    
}
  }
  
  async function gettime(){
      var res = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles")
      var jason = await res.json();
    var anything = (jason.datetime.slice(11,13))
    if(anything>=06&&anything<=16){
        bg = "sprites/bg.png"
    }
else{

    bg = "sprites/bg2.jpg"
}  
backgroundImg = loadImage(bg);
   
  }