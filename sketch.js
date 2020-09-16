var dog, happyDog, database, foodS, foodStock

function preload()
{
  dogImage=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  

  dog=createSprite(250,250,5,5)
  dog.addImage(dogImage)
  foodStock=database.ref("Food");
foodStock.on("Value",readStock);
  
}



function draw() { 
  background(46, 139, 87) 
if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogHappy)
}
  drawSprites();


}



function readStock(data) {
  foodS=data.val();

}
function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}