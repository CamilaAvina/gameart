function Pipe() {
  debris = [nes, car, trash];
  this.top = random(height / 2.7);
  this.bottom = random(height / 2.5);
  var deb = debris[Math.floor(Math.random() * debris.length)];
  //this.debris = random(imageArray)
  // this.r = this.image.width
  // instead of top and bottom you will need this.y and this.r
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(ship) {
    if (ship.y < this.top || ship.y > height - this.bottom) {
      if (ship.x > this.x && ship.x < this.x + 20) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
      noLoop();
<<<<<<< HEAD
    button= createButton('GAMEOVER');
    button.position( width/2, height/2);
    button.mousePressed(title);
    }

    rect(this.x, 0, this.w, this.top)
    rect(this.x, height-this.bottom, this.w, this.bottom)
=======
      text('GAMEOVER', width/2, height/2);
    }


    image(deb, this.x, this.top, 60,60);
    image(deb, this.x, height - this.bottom, 60,60);

>>>>>>> 2201a5e968d52202456f2a3a1a09305cc57cbf03
  }

  this.update = function() {
    this.x -= this.speed;

  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

}
