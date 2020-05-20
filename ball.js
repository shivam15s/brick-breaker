function Ball(){
  this.pos = createVector(width/2, height/2);
  this.r=24;
  this.velocity = createVector(0.01,8);
    
  this.show=function(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r); 
  }
  
  this.update=function(){
    this.pos.x=this.pos.x+this.velocity.x;
    this.pos.y=this.pos.y+this.velocity.y;
  }
  
  this.reflect=function(){
    if (this.pos.x>=attack.pos.x-attack.width/2 && this.pos.x<=attack.pos.x+attack.width/2){
      if (this.pos.y<=attack.pos.y-this.r/2 && this.pos.y+this.velocity.y>=attack.pos.y-this.r/2){
        this.velocity.y=-1*this.velocity.y;
        if (this.velocity.x>=0)
          this.velocity.x=this.velocity.x+abs(0.1)*(this.pos.x-attack.pos.x);
        else
          this.velocity.x=this.velocity.x+abs(0.1)*(this.pos.x-attack.pos.x);
        
        // console.log(this.velocity.x);
        // this.velocity.x=this.velocity.x*4/attack.width;
        // console.log(this.velocity.x);
      }
    }
    
//     if (this.pos.x===attack.pos.x+attack.width/2){
//       if (this.pos.y<=attack.pos.y+attack.height && this.pos.y>=attack.pos.y){
//         this.velocity.x=-this.velocity.x;
//       }
//     }
    
//     if (this.pos.x===attack.pos.x-attack.width/2){
//       if (this.pos.y<=attack.pos.y+attack.height && this.pos.y>=attack.pos.y){
//         this.velocity.x=-this.velocity.x;
//       }
//     }
    
    
    for (var i=0; i<left.length;i++){
      if (this.pos.y>=left[i][0] && this.pos.y<=left[i][1]){
        if (this.pos.x >= left[i][2]+this.r/2 && this.pos.x+this.velocity.x <= left[i][2]+this.r/2){
          this.velocity.x=-1*this.velocity.x;
          if (i!=0){
            score=score+1;
            left.splice(i,1);
            right.splice(i,1);
            up.splice(i,1);
            down.splice(i,1);
            block.splice(i-1,1);
          }
        }
      }
    }
    
    for (i=0; i<right.length;i++){
      if (this.pos.y>=right[i][0] && this.pos.y<=right[i][1]){
        if (this.pos.x <= right[i][2]-this.r/2 && this.pos.x+this.velocity.x >= right[i][2]-this.r/2){
          this.velocity.x=-this.velocity.x;
          if (i!=0){
            score=score+1;
            left.splice(i,1);
            right.splice(i,1);
            up.splice(i,1);
            down.splice(i,1);
            block.splice(i-1,1);
          }
        }
      }
    }
    
    for (i=1; i<down.length;i++){
      if (this.pos.x>=down[i][0] && this.pos.x<=down[i][1]){
        if (this.pos.y <= down[i][2]-this.r/2 && this.pos.y+this.velocity.y>=down[i][2]-this.r/2){
          this.velocity.y=-this.velocity.y;
          if (i!=0){
            score=score+1;
            left.splice(i,1);
            right.splice(i,1);
            up.splice(i,1);
            down.splice(i,1);
            block.splice(i-1,1);
          }
        }
      }
    }
    
    for (i=0; i<up.length;i++){
      if (this.pos.x>=up[i][0] && this.pos.x<=up[i][1]){
        if (this.pos.y >= up[i][2]+this.r/2 && this.pos.y+this.velocity.y <= up[i][2]+this.r/2){
          this.velocity.y=-this.velocity.y;
          if (i!=0){
            score=score+1;
            left.splice(i,1);
            right.splice(i,1);
            up.splice(i,1);
            down.splice(i,1);
            block.splice(i-1,1);
          }
        }
      }
    }
    
    
  }
}