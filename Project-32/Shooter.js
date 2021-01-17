class Shooter{

    constructor(x, y, radius) {

        var options = {

            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(x, y, 20, options);
        this.image = loadImage("polygon.png");
        this.radius = radius;
    
        World.add(world, this.body);
      }

      display(){

        var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        imageMode(CENTER);

        fill("#0000CD");
        stroke("white");
        strokeWeight(2);

        image(this.image,0, 0, this.radius, this.radius);

        pop();
      }
}
