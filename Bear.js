class Bear{
    constructor(x,y){
        
        this.y = y;
        this.x = x;
        this.width = 50;
        this.height = 50;
        this.mood = "attack";
        this.image = loadImage("d.png");
        
    }
    display(){
        image(this.image,this.x,this.y,50,50);
        push();
        if(this.mood  ==="attack"){
            var colour = "red";
        }
        else if(this.mood = "calm"){
              var colour ="green";
              
        }
        fill(colour)
        ellipse(this.x,this.y,10,10);
        pop();
    }
  
}