function Enemy(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.direction = "d"
  this.speed = 2;
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
  }//end function display
  
  this.update= function(){
    if(this.direction == "d"){
      this.y += this.speed;
    }
    if(this.direction == "u"){
      this.y -= this.speed;
    }
    if(this.direction == "l"){
      this.x -= this.speed;
    }
    if(this.direction == "r"){
      this.x += this.speed;
    }
  }
}//end Enemy
