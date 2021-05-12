class Block{
    constructor(x,y){
       var options={
         isStatic:false,
         friction:1.0,
         restitution:0.5,
         density:1.0
       }
       this.body=Bodies.rectangle(x,y,30,50,options)
       this.width = 30;
       this.height = 50;
       World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        fill("green");
        pop();
      }
}