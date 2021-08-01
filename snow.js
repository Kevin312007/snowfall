 class Snow{
     constructor(x,y){
         this.flake=Bodies.circle(x,y,5)
         World.add(world,this.flake)
     }
     display(){
         fill("white")
         circle(this.flake.position.x,this.flake.position.y,10)
     }
 }
