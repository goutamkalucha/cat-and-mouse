

var bgImg;
var cat,mouse;
var cat1Img,cat2Img,mouse1Img,mouse2Img;


function preload() {
    bgImg = loadImag("garden.png");
    cat1Img = loadImage("cat1.png");
    cat2Img = loadImage("cat2.png");
    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadImage("mouse2.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870,600);
    cat.addAnimation(cat1Img);
    cat.scale=0.3;

    mouse = createSprite(200,600);
    mouse.addAnimation(mouse1Img);
    mouse.scale=0.15;
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
       
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.veloityX=0;
        cat.addAnimation("catGoing",cat2Img);
       cat.x=200;
       cat.scale=0.2;
       cat.changeAnimation("catGoing");
       mouse.addAnimation("mouseGoing",mouse2Img);
       mouse.scale=0.15;
       mouse.changeAnimation("mouseGoing");

    }
     
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){

      mouse.addAnimation("mouseTeasing",mouse2Img);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;

      cat.velocityX= -5;
      cat.addAnimation("catRunning",cat2Img);
      cat.changeAnimation("catRunning");

    }
  //For moving and changing animation write code here


}
