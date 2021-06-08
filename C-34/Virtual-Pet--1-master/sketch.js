var dogImg,dog,dogImg2 
var database 
var foodS,foodStock 

function preload()
{
	dogImg = loadImage("images/dogImg.png") 
  dogImg2 = loadImage("images/dogImg1.png") 

}

function setup() {

	createCanvas(800, 700);
  database=firebase.database() 
  dog=createSprite(250,300,150,150); 
  dog.addImage(dogImg); 
  dog.scale=0.15;
  foodStock=database.ref('Food'); 
  foodStock.on("value",readStock); 
  textSize(20); 
}


function draw() {  
  
  background("blue");

  drawSprites();
  
  if(keyWentDown(UP_ARROW))
  { 
    writeStock(foodS); 
    dog.addImage(dogImg2); 
  }
}

  

function readStock(data)
  { 
    foodS=data.val(); 
  }



  function writeStock(x)
  { 
    if(x<=0)
    { 
      x=0; 
    }
    else { 
      x=x-1; 
    } 
    database.ref('/').update({ Food:x }) }




