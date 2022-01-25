function RightTurn(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.name = "rightTurn"
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
  }

}

