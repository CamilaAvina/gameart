function Pipe() {
  debris = [nes, car, trash];
  this.top = random(height / 2.5);
  this.bottom = random(height / 2.5);
  var deb = debris[Math.floor(Math.random() * debris.length)];
<<<<<<< HEAD
  console.log(deb);
  //this.debris = random(imageArray)
  // this.r = this.image.width
  // instead of top and bottom you will need this.y and this.r
=======

>>>>>>> 1d06e09ff52f3e13fbfbb2741686c09a6d02c75a
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(ship) {
<<<<<<< HEAD
    if (ship.y < this.top || ship.y > height - this.bottom) {
      if (ship.x > this.x && ship.x < this.x + 20) {
        this.highlight = true;
        return true;
      }
    }
=======
    if (dist(ship.x, ship.y, this.x, this.y) < 30) {
      if (ship.x < 200){

      this.highlight = true;
      return true;
    }}


>>>>>>> 1d06e09ff52f3e13fbfbb2741686c09a6d02c75a
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
      noLoop();


    button.mousePressed(title);
    }

<<<<<<< HEAD
    rect(this.x, 0, this.w, this.top)
    rect(this.x, height-this.bottom, this.w, this.bottom)


    }


    image(deb, this.x, this.top, 60,60);
    image(deb, this.x, height - this.bottom, 60,60);

=======
    image(deb, this.x, this.y, 60, 60);
    //  image(deb, this.x, height - this.bottom, 60,60);
>>>>>>> 1d06e09ff52f3e13fbfbb2741686c09a6d02c75a
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
