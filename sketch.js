let bg;
let index;
let state = 'title';
let cnv;
var ship;
var pipes = [];
let button;


function setup() {
  bg1 = loadImage('assets/Shatterdearth.png');
  bg = loadImage('assets/space.png');
  img = loadImage('assets/spaceship.png');
  nes = loadImage('assets/NES.png');
  car = loadImage('assets/sketch.png');
  trash = loadImage('assets/trash.png');

button = createButton('GAMEOVER');

button.mousePressed(title);
button.size(100,50);
button.style("background-color","#fc0000");
button.style("color","#fff");


  createCanvas(1100, 400);
  button.position( 550, 350);
  ship = new Ship()
  pipes.push(new Pipe());



}

function draw() {


   if (state==='title'){
    title();
    //cnv.mouseClicked(titleMouseClicked);

  }
  else if (state === 'level 1'){
    level1();
    //cnv.mouseClicked(level1MousedClicked);
  }



  ship.update();

  if (frameCount % 100 == 0 ){
    pipes.push(new Pipe());
  }

}

function keyPressed(){
  if (key == ' '){
    ship.up();
  }

}

function title(){
button.hide();
background(bg1);
// textSize(100);
// stroke(255);
//text('Welcome',100,100);
// bird.update();
// bird.show();
//textSize(30);
//text('click anywhere to start',100,300);
}

function titleMouseClicked(){
  state = 'level 1';
}

function level1(){
background(bg);
    ship.show();
    for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

      if (pipes[i].hits(ship)) {
      }
      if (pipes[i].offscreen()){
      pipes.splice(i, 1);
    }
  }

}

function level1MousedClicked(){
}

function mousePressed(){
  state = 'level 1';

}
