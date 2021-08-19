var backgroundimg;
var boy;
var snow;


function preload() {
  backgroundImg = loadImage("snow2.jpg");
  snow = loadImage("snow3.png")
}
function setup() {
  var canvas = createCanvas(1200,400);
  createSprite(400, 200, 50, 50);

  boy = new boy(700,320,70,70);
}

function draw() {
  background(255,255,255);  

boy.display();
backgroundImg.display();

  drawSprites();
}