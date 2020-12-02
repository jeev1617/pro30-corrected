class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':2.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.body.position.x=x;
      //this.body.position.y=y;
      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed<4){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
      }
      else{
        this.Visiblity = this.Visiblity-1;
        World.remove(world, this.body);
        push();
        tint(255,this.Visiblity);
        rect(this.body.position.x,this.body.position.y ,this.width, this.height);
        pop();
      }
    }
  };