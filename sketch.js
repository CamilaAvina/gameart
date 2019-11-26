'use strict';
// let bird;
let state = 'title';
let cnv;

function setup(){
cnv= createCanvas (600,600);

 // bird = new bird();
}

function draw(){
  if (state==='title'){
    title();
    cnv.mouseClicked(titleMouseClicked);

  }
  else if (state === 'level 1'){
    level1();
    cnv.mouseClicked(level1MousedClicked);
  }
}


function title(){
background(0);
textSize(100);
stroke(255);
text('Welcome',100,100);
// bird.update();
// bird.show();
textSize(30);
text('click anywhere to start',100,300);
}

function titleMouseClicked(){
  state = 'level 1';
}


function level1(){
  background( 50,150,200);
}

function level1MousedClicked(){

}
function mousePressed(){
  state = 'level 1';

}





function keyPressed() {
  if (key == ''){
   //  bird.up();
   // // console.log("space");

  }
}
