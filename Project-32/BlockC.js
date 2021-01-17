/*class BlockC{

    constructor(x, y, width, height) {

        var options = {

            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
    
        World.add(world, this.body);
      }

      score(){

        if(this.visiblity < 0 && this.visiblity > -105){

          score++;
        }
      }

      display(){

        if(this.body.speed < 4){

        push();

        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("#00FFFF");
        stroke("white");
        strokeWeight(2);
        rect(0, 0, this.width, this.height);

        pop();

        }
        else{

          World.remove(world, this.body);

          push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          
          pop();
        }

    }
}*/

class BlockC extends BaseClass {

  constructor(x, y, width, height){

    super(x, y, width, height);
  }

  display(){

    super.display();

    fill("#00FFFF");
  }
}
