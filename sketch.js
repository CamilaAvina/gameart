var ship;
var pipes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(ship)) {

    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

  ship.update();
  ship.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }


}

function keyPressed() {
  if (key == ' ') {
    ship.up();
  }

}
