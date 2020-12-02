class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.launcher=Constraint.create(options);
      this.pointB=pointB;
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }
        attach(body){
            this.launcher.bodyA=body;
            }
    

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;

        strokeWeight(4);
        stroke("purple")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
}
    }
}












