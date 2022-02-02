function Tower(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.dragging = false;
  this.offsetX = 0;
  this.offsetY = 0;
  
  this.update = function(){
    rect(this.x, this.y, this.w, this.h);
    if(this.dragging){
      this.x = mouseX;
      this.y = mouseY;
    }
  } //end update 
  this.pressed = function(){
    if(mouseX >= this.x - this.w /2 &&
      mouseX <= this.x + this.w /2 &&
      mouseY >= this.y - this.h/2 &&
      mouseY <= this.y + this.h/2)
    {
      this.dragging = true;
    }//end if
  }//end pressed
  this.released = function(){
    this.dragging = false;
  }
} //end tower
