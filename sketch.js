var a,b,c,d;

function setup() {
  createCanvas(1200,1200);
  a = createSprite(600, 200, 50, 80);
  a.shapeColor = "green";
  
  b = createSprite(400,200,80,30);
  b.shapeColor = "green";
  c=createSprite(800,200,50,80);
  c.shapeColor="green";
  d=createSprite(1000,200,50,80);
  d.shapeColor="green";
  b.velocityX=5
}

function draw() {
  background(0,0,0);  
  
bounceOff(b,d)
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 ){
      object1.velocityX=object1.velocityX * (-1)
      object2.velocityX=object2.velocityX * (-1)
    }
if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
object2.y - object1.y < object1.height/2 + object2.height/2){
  object1.velocityY=object1.velocityY * (-1)
      object2.velocityY=object2.velocityY * (-1)
}
    
  
}
