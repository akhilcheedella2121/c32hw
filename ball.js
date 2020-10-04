class Ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.4,
        }
        this.r=r
        this.body = Bodies.circle(x, y, radius, options);
        this.width = 9
        this.height =radius
        this.Bodies.circle(x,y,this.r,options);
this.color = color(random(0,255),random(0,255),random(0,255))
world.add(world, this.world);
    }
      display(){
          var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r , this.r)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }
  