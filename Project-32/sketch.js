const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bar1, bar2, bar3, bar4, bar5;

var ground;

var block1, block2, block3, block4, block5, block6;
var block7, block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16, block17, block18, block19, block20, block21;
var block22, block23, block24, block25, block26, block27;

var shooter;

var sling;

var gameState = "start";

var score = 0;

function preload(){

    backGround();
}

function setup(){

    createCanvas(1280,575);

    engine = Engine.create();
    world = engine.world;

    bar1 = new Bar(600,150,150,10);
    bar2 = new Bar(600,450,150,10);
    bar3 = new Bar(850,300,100,10);
    bar4 = new Bar(1100,150,150,10);
    bar5 = new Bar(1100,450,150,10);

    ground = new Bar(640,550,width,10);

    block1 = new BlockA(560,428,38,30);
    block2 = new BlockA(600,428,38,30);
    block3 = new BlockA(640,428,38,30);
    block4 = new BlockB(580,96,38,30);
    block5 = new BlockB(620,96,38,30);
    block6 = new BlockC(600,65,38,30);

    block7 = new BlockA(560,128,38,30);
    block8 = new BlockA(600,128,38,30);
    block9 = new BlockA(640,128,38,30);
    block10 = new BlockB(580,396,38,30);
    block11 = new BlockB(620,396,38,30);
    block12 = new BlockC(600,365,38,30);

    block13 = new BlockB(830,278,38,30);
    block14 = new BlockB(870,278,38,30);
    block15 = new BlockC(850,246,38,30);

    block16 = new BlockA(1060,128,38,30);
    block17 = new BlockA(1100,128,38,30);
    block18 = new BlockA(1140,128,38,30);
    block19 = new BlockB(1080,96,38,30);
    block20 = new BlockB(1120,96,38,30);
    block21 = new BlockC(1100,65,38,30);

    block22 = new BlockA(1060,428,38,30);
    block23 = new BlockA(1100,428,38,30);
    block24 = new BlockA(1140,428,38,30);
    block25 = new BlockB(1080,396,38,30);
    block26 = new BlockB(1120,396,38,30);
    block27 = new BlockC(1100,365,38,30);

    shooter = new Shooter(300,height/2,45);

    sling = new Sling(shooter.body,{x : 300, y : shooter.body.position.y});
    
}

function draw(){

    Engine.update(engine);
    
    if(background){

    background("#000000");

    }

    else{

        background("#3457D5");
    } 
    
    textSize(20);
    textFont("timesnewroman");
    fill("white");
    text("Score : " + score,50,40);

    //console.log("SCORE==>". score);

    bar1.display();
    bar2.display();
    bar3.display();
    bar4.display();
    bar5.display();

    ground.display();

    block1.display();
    block2.display(); 
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display(); 
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display(); 
    block15.display();

    block16.display();
    block17.display(); 
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display(); 
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block1.score();
    block2.score(); 
    block3.score();
    block4.score();
    block5.score();
    block6.score();

    block7.score();
    block8.score(); 
    block9.score();
    block10.score();
    block11.score();
    block12.score();

    block13.score();
    block14.score(); 
    block15.score();

    block16.score();
    block17.score(); 
    block18.score();
    block19.score();
    block20.score();
    block21.score();

    block22.score();
    block23.score(); 
    block24.score();
    block25.score();
    block26.score();
    block27.score();

    shooter.display();

    sling.display();
}

function mouseDragged(){

    if(gameState !== "shoot"){ 

    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){

    sling.fly();
    gameState = "shoot"
}

function keyPressed(){

    if(keyCode === 32){

        sling.attach(shooter.body);
    }
}   

async function backGround(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON = await response.json();
   // console.log("Time==>", responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour >= 0600 && hour <= 1800){

        background("#3457D5");
    }

    else{

        background("#000000");
       
    }
 
    console.log("Background ==>", background);
}
