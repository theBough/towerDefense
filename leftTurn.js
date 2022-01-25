function LeftTurn(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.name = "leftTurn"
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
  }

}

