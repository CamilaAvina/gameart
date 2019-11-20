let button;
let cnv;
let yourInputs = [];
let submit = [];
let count = 11;

function setup() {
  cnv = createCanvas(500, 500);
  cnv.parent("#canvasDiv");
   //background(255);

   button = select('#Button');
   button.mousePressed(buttonPressed);
   button.class("Btn");



for(let i = 0; i <5; i++) {

   yourInputs.push( createInput());
   yourInputs[yourInputs.length-1].parent("inputFields");
   //yourInputs.position(100,100);
}

}
function draw() {
  noStroke();
//  fill('pink');
  rect(225, 130, 250, 150);
  textSize(100);
   text(count,width/2, height/2);




}
function buttonPressed(){
for (let i = 0; i < yourInputs.length; i++) {
  submit.push(yourInputs[i].value());

}
count= count+11;
}
















// let checkboxes = [];
// let size=100;
// function setup() {
//   createCanvas(500, 500);
//    background(0);
//    for (let i = 0; i <100; i ++ ){
//   checkboxes[i] = createCheckbox('label');
//
//   checkboxes[i].style('display','inline');
//   checkboxes[i].position(random(windowWidth)),(random(windowHeight));
//   checkboxes[i].changed(myCheckedEvent);
// }
// }
// function myCheckedEvent();
//
// function draw() {
//   ellispe(mouseX,mouseY,size);
//
// }
