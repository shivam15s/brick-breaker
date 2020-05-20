function Attack(){
  this.show_width=100;
  this.width=150;
  this.height=20;
  this.pos = createVector(width/2, height-40);
  
  
  this.show=function(){
    fill(255);
    rect(this.pos.x-this.show_width/2, this.pos.y, this.show_width, this.height);
  }
  this.updateleft=function(){
    this.pos.x=this.pos.x-this.show_width/10;
    if (this.pos.x<this.show_width/2)
      this.pos.x=this.show_width/2;
  }
  this.updateright=function(){
    this.pos.x=this.pos.x+this.show_width/10;
    if (this.pos.x>(600)-this.show_width/2)
      this.pos.x=600-this.show_width/2;
  }
  
}