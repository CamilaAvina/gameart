let img;

function Ship(){
  this.y = height/2;
  this.x = 100;

  this.gravity = .4;
  this.lift=-15;
  this.velocity = 0;

  this.show = function(){
     image(img,this.x,this.y, 60,40);
  }

  this.up = function(){
    this.velocity += this.lift;
    console.log(this.velocity);
  }

  this.update = function(){
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

  if (this.y > height){
    this.y = height;
      this.velocity = 0;
  }

  this.y += this.velocity;
    if (this.y < 0){
    this.y = 0;
      this.velocity = 0;
  }

  }

}
