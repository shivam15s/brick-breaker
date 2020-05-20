
function Block(x, y, width, height){
  this.pos = createVector(x,y);
  append(left,[y-8,y+height+8, x+width+8]);
  append(right,[y-8,y+height+8,x+8]);
  append(down,[x-8,x+width+8, y+8]);
  append(up,[x-8, x+width+8, y+height+8]);
  this.show=function(){
    fill(255);
    rect(this.pos.x, this.pos.y, width, height);
  }
}
