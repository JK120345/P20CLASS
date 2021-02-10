var catImg,mosImg;
var carA,Ma,catp,mp,gr;
var tom,jerry,
var btoa;
var  gameState=PLAY;
var  gameState=END;
function preload() {
    //load the images here
    catImg=loadImage("cat1.png");
    carA=addAnimation("cat3.png","cat2.png");
    catp=loadImage("cat.png4");

    Ma=addAnimation("mouse1.png","mouse4.png");
    mp=addAnimation("mouse2.png","mouse3.png");

    gr=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    tom=createSprite(700,700,20,20);
    tom.addImage("sit",catImg);

    jerry=createSprite(50,700,20,20);
    jerry.addAnimation("ST",Ma);

    stroke("black");
    textSize(30);
    text("press space to make tom move",350,100);

}

function draw() {

    background(255);
    btoa=createSprite(1000,800);
    btoa.addImage(gr);

    if(keyDown("space")){
        gameState=PLAY
    }
    if((gameState===PLAY)){
        tom.velocityX=-4;
        tom.addAnimation("tom",carA);
        
        if(tom.isTouching(jerry)){
            gameState=END
        }

    }
    if((gameState===END)){

        tom.velocityX=0;
        tom.addImage("t",catp);

        jerry.addAnimation("sp",mp);


    }
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
