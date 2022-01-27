function Enemy(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.direction = "d"
  this.speed = 2;
  this.img = loadImage("bot.png")
  
  this.display = function(){
    this.img.resize(this.w, this.h)
    image(this.img, this.x, this.y);
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
