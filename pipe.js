function Pipe() {
  debris = [nes, car, trash];
  this.y = random(height);
  var deb = debris[Math.floor(Math.random() * debris.length)];

  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(ship) {
    if (dist(ship.x, ship.y, this.x, this.y) < 30) {
      if (ship.x < 200){

      this.highlight = true;
      return true;
    }}


    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
      noLoop();
      button.show();

    }

    image(deb, this.x, this.y, 60, 60);
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
