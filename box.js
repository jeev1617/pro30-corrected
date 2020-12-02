class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':2.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.body.position.x=x;
      //this.body.position.y=y;
      World.add(world, this.body);
      this.Visiblity=255;
    }
    display(){
     
      if(this.body.speed<4){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(rgb(random(0,255),random(0,255),random(0,255)));
      rect(0,0, this.width, this.height);
      pop();
      }
      else{
        this.Visiblity = this.Visiblity-1;
        push();
        World.remove(world, this.body);
        tint(255,this.Visiblity);
        rect(0,0 ,this.width, this.height);
        pop();
      }
    }
  };