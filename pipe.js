function Pipe(){
  this.top = random(height/2.5);
  this.bottom = random(height/2.5);
  // this.image = random(imageArray)
  // this.r = this.image.width
  // instead of top and bottom you will need this.y and this.r
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(ship){
    if (ship.y < this.top || ship.y > height - this.bottom) {
      if (ship.x > this.x && ship.x < this.x + this.w){
      this.highlight = true;
      return true;
      }
    }
   this.highlight = false;
  return false;
  }

  this.show = function(){
    fill(255);
    if (this.highlight){
      fill (255, 0, 0);
      noLoop();
    button= createButton('GAMEOVER');
    button.position( width/2, height/2);
    button.mousePressed(title);
    }

    rect(this.x, 0, this.w, this.top)
    rect(this.x, height-this.bottom, this.w, this.bottom)
  }

  this.update = function(){
  this.x -= this.speed;

  }

  this.offscreen = function() {
    if (this.x < -this.w){
      return true;
    } else {
      return false;
    }
  }

}
