class Dot{
    constructor(x, y,radius) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = 10
        this.height =radius
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }
  