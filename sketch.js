const Engine = Matter.Engine;
const World  = Matter.World
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var sprites,boy;
var healht =[];
var healhtLevel =100;
var danger
var boyImg
var boyI
var background1Img
var background1
var healhtImg;
var dangerImg;
var bear;
var bearSprite;
var bag =["honey"];
var tree;
var treeImg;
var tree21;
var tree22;
var tree23;
var tree24;
var engine,world;
var tree25;
var tree1,tree17,tree18,tree19,tree20;
var boySprite;
function preload(){
    boyImg = loadImage("man2.png");
    background1Img = loadImage("india 4.jpg");
    healhtImg = loadImage("z.jpg");
    dangerImg = loadImage("swiminng.png");
    treeImg = loadImage("tree1.png")
}
function setup() {

    createCanvas(5000,5000);

    engine = Engine.create();
    world = engine.world;

    bear = new Bear(400,500);
    boy = new Boy (2500,2500);
   
    boySprite = createSprite(1950,800,5000,5000);
    boySprite.addImage(boyImg);
    boySprite.scale = 0.6
    boySprite.x = boy.x;
    boySprite.y = boy.y;
   
    danger = createSprite(300,100,50,50);
    danger.addImage(dangerImg);
    danger.scale = 0.05;
    bearSprite = createSprite(800,800,50,50);
    bearSprite.visible = false

  for(var z = 1650;z<1950;z = z+250){
      tree19 = createSprite(4850,z,100,100);
      tree19.addImage(treeImg);
      tree19.scale = 0.05;
  }
    
  for(var c = 150;c<4900;c = c+350){
      tree1 = createSprite(c,1400,50,50);
      tree1.addImage(treeImg);
      tree1.scale = 0.05;
  }

  for(var i =500;i<5000;i = i+350){
      tree18 = createSprite(i,2090,450,50);
      tree18.addImage(treeImg)
      tree18.scale = 0.05;
  }

  for(var p=200;p<4900;p = p+350){
      tree21 = createSprite(p,200,50,50);
      tree21.addImage(treeImg);
      tree21.scale = 0.05
  }

  for(var r = 400;r<1200;r =r+350){
      tree22 = createSprite(2500,r,50,50);
      tree22.addImage(treeImg);
      tree22.scale = 0.05
   }

  for(var t = 400;t<1200;t = t+350){
      tree23 = createSprite(700,t,50,50);
      tree23.addImage(treeImg);
      tree23.scale = 0.05
  }

  for(var a = 200;a<4900;a = a+350){
      tree24 = createSprite(a,3050,50,50);
      tree24.addImage(treeImg);
      tree24.scale = 0.05
   }
   
   for(var b = 200;b<4900;b = b+350){
    tree25 = createSprite(b,4000,50,50);
    tree25.addImage(treeImg);
    tree25.scale = 0.05
   }
    
}

function draw() {
    Engine.update(engine);

    background(background1Img)
 
    if(keyDown(UP_ARROW)){
        boy.y = boy.y-50
    } 

    if(keyDown(DOWN_ARROW)){
        boy.y = boy.y+50;
    }

    if(keyDown(RIGHT_ARROW)){
        boy.x = boy.x+50;
    }

    if(keyDown(LEFT_ARROW)){
        boy.x = boy.x-50;
    }
    boySprite.x = boy.x;
    boySprite.y = boy.y;


    //pacifying the bear;
    if(boySprite.isTouching(bearSprite)){

         for(var item in bag){

             if (bag[item] ==="honey"){
                 bear.mood = "calm"
             }
             
         }
             if(bear.mood==="attack"){
             boy.updateHealth=boy.updateHealth+5;
             }
     }

    //increasing healht on touching healht;
    if(healhtLevel<100){
          for(var i=0;i<=6;i++){
              if(boySprite.isTouching(healht[i])){
                    healht[i].destroy();
                    boy.updateHealth = boy.updateHealth+5;
              } 
          }
    
    }
       
    if(boySprite.isTouching(danger)&&healhtLevel>10){
          healhtLevel = healhtLevel-1;
        
    }
  
     bear.display();
  drawSprites();
}
