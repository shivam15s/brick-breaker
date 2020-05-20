
var left = [[]];
var right = [[]];
var down = [[]];
var up = [[]];
var score=0;
var cscore=0;

function setup() {
  createCanvas(600, 600);
  frameRate(60);
  left[0]=[0, height, 0];
  right[0]=[0, height, width];
  down[0]=[0, width, height];
  up[0]=[0, width, 0];
  attack= new Attack();
  ball = new Ball();
  block = [];
  var total=0;
  for (var i=0; i<2; i++){
    var start = 0;
    while (start<width){
      block[total]=new Block (start,i*25,75,25);
      start+=75;
      total+=1;
    }
  }
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW)){
    attack.updateleft();
  }
  if (keyIsDown(RIGHT_ARROW)){
    attack.updateright();
  }
  attack.show();
  ball.update();
  ball.reflect();
  ball.show();
  for (var i = 0; i<block.length; i++){
    block[i].show();
  }
  
  if (block.length===0 || ball.pos.y>height)
    if (cscore===0){
      console.log(score);
      cscore=1;
    }
  
}