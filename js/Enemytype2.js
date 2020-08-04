class Enemytype2 {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 50;
        this.height = 50;
        this.image = loadAnimation("sprite/enemy3a.png","sprite/enemy3b.png","sprite/enemy3c.png","sprite/enemy3d.png","sprite/enemy3e.png","sprite/enemy3f.png","sprite/enemy3g.png","sprite/enemy3h.png");
        World.add(world, this.body);
      }
  
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        animation(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }
  