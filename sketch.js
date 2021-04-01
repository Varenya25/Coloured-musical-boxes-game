var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;
var surmusic;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    surface1 = createSprite(98,590,190,15)
    surface2 = createSprite(300,590,190,15)
    surface3 = createSprite(501,590,190,15)
    surface4 = createSprite(700,590,190,15)
   
    //create box sprite and give velocity
    box = createSprite(random(20,75),100,30,30);
    box.velocityX = 4;
    box.velocityY = 4;
    box.shapeColor = "white";
 
}

function draw() {
    background(rgb(169,169,169));
    
    //Giving shape colour to the surfaces
    surface1.shapeColor = "blue";
    surface2.shapeColor = "red";
    surface3.shapeColor = "yellow";
    surface4.shapeColor = "pink";
   
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it bounce
if(surface1. isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "blue";
}
 
if(surface2. isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "red";
  music.play();
}
 
if(surface3. isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "yellow";
}

if(surface4. isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "pink";
    box.velocityX = 0;
   box.velocityY = 0;
   music.stop();

}


drawSprites();
}
