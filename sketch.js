var cat, catImg,mouse,mouseImg,backgroundImg,catImg2,mouseImg2,catImg3,mouseImg3
function preload() {
    //load the images here
    catImg=loadAnimation('images/cat1.png');
    mouseImg=loadAnimation('images/mouse1.png');
    backgroundImg=loadImage('images/garden.png')
    catImg2=loadAnimation('images/cat2.png','images/cat3.png')
    mouseImg2=loadAnimation('images/mouse2.png','images/mouse3.png')
    catImg3=loadAnimation('images/cat4.png')
    mouseImg3=loadImage('images/mouse4.png')
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat =createSprite(600,640,50,50);
    cat.addAnimation('sleptcat',catImg)
    cat.scale=0.2;
    mouse=createSprite(200,640);
    mouse.addAnimation('disterbingmouse',mouseImg);
    mouse.scale=0.2;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.addAnimation('catstop',catImg3);
       cat.changeAnimation('catstop');
       mouse.addAnimation('mousestop',mouseImg3);
       mouse.changeAnimation('mousestop');
       cat.velocityX=0
       cat.x=600;
   }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation('catwalk',catImg2);
    cat.changeAnimation('catwalk')
    mouse.addAnimation('mousetease',mouseImg2)
    mouse.frameDelay=25
    mouse.changeAnimation('mousetease')
}

}
