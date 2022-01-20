function Enemy(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.direction = "d"
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
  }//end function display
  
  this.update= function(){
    if(this.direction == "d"){
      this.y += 3;
    }
    if(this.direction == "u"){
      this.y -= 3;
    }
    if(this.direction == "l"){
      this.x -= 3;
    }
    if(this.direction == "r"){
      this.x += 3;
    }
  }
}//end Enemy
