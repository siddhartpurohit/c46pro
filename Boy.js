class Boy{
    constructor(x,y){
        var options ={
        
        }
       
        this.body = Bodies.rectangle(x,y,20,50,options);
        this.x = x
        this.y = y
        this.health = 100;
        World.add(world, this.body)
    
}
     updateHealth(health){
        
        this.health = this.health + health;
        push ();
        if (this.health> 70){
            var colour = "blue";
        } else if(this.health > 40){
            var colour = "yellow";
        }
         else if (this.health<0){
            var colour = "red";
         }
         else{
          console.log("game end");         
        }
        
         fill(colour);
         ellipse(x-5,y-50, 500,500);
         
         pop();
         
    }
   
}