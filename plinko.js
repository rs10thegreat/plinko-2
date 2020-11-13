class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
            }

            this.body = Bodies.circle(x, y,10,options);
            World.add(world, this.body);
          }
          display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            fill("white");
            circle(0,0,20)
            pop();
          }}