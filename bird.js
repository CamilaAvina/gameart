function Bird (){
  this.y = height/2;
  this.x = 50;

  this.gravity = 1;
  this.velocity = 0;

  this.show = function(){
    fill(255);
    ellipse(this.x,this.y, 50,50);
  }
  this.up = function (){
    this.velocity += -this.gravity* 10;
  }

this.update = function(){
  this.velocity += this.gravity;
  this.y += this.velocity;

  if (this.y >height){
    this.y = height;
    this.velocity = 0 ;

  }

}
}
