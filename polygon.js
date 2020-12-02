class Polygon {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 30;

      World.add(world, this.body);
      this.image=loadImage("polygon.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      strokeWeight(2);
      stroke("red");
      fill("pink");
      image(this.image,0, 0,30,30);
      pop();
    }
  };