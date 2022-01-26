let e;
let l = [];
let r = [];
let img;

function setup() {
  createCanvas(600, 400);
  e = new Enemy(300, 0, 25, 25);
  placeTurnBlocks()
  
  img= loadImage("map.jpg")
}
function placeTurnBlocks(){
  //create a block for every corner.
  //reminder: RightTurn(x location, y location, width, height)
  r.push(new RightTurn(500,65,40,40,"red"));
  l.push(new LeftTurn(295, 85, 40, 40,"blue"));
}

function draw() {
  background(220);
  image(img,0,0,600,400)
  for(i = 0; i<r.length;i++){
    r[i].display();
  }
   for(i = 0; i<l.length;i++){
    l[i].display();
  }
  
  
  e.display();
  e.update();
  checkForTurns();
}

function changeDirection(thisEnemy, thisTurn) {
  if (thisTurn.name == "leftTurn") {
    switch (thisEnemy.direction) {
      case "l":
        thisEnemy.x += 3;
        thisEnemy.direction = "d";
        break;
      case "r":
        thisEnemy.x -= 3;
        thisEnemy.direction = "u";
        break;
      case "u":
        thisEnemy.y += 3;
        thisEnemy.direction = "l";
        break;
      case "d":
        thisEnemy.y -= 3;
        thisEnemy.direction = "r";
        break;
    } //end Switch
  }else{
    switch (thisEnemy.direction) {
      case "l":
        thisEnemy.x += 3;
        thisEnemy.direction = "u";
        break;
      case "r":
        thisEnemy.x -= 3;
        thisEnemy.direction = "d";
        break;
      case "u":
        thisEnemy.y += 3;
        thisEnemy.direction = "r";
        break;
      case "d":
        thisEnemy.y -= 3;
        thisEnemy.direction = "l";
        break;
    } //end Switch
  }
}

//check to see if we collide with
//a leftTurn, or rightTurn
function checkForTurns() {
  rectMode(CENTER)
  for(i = 0; i< l.length; i++){
    if (
    Math.abs(e.x - l[i].x) < Math.abs(e.w / 2 + l[i].w / 2) &&
    Math.abs(e.y - l[i].y) < Math.abs(e.h / 2 + l[i].h / 2)
  ) {
    changeDirection(e,l[i]);
    }//end if
  }//end for
  
  for( i = 0 ; i < r.length; i++){
    if (
    Math.abs(e.x - r[i].x) < Math.abs(e.w / 2 + r[i].w / 2) &&
    Math.abs(e.y - r[i].y) < Math.abs(e.h / 2 + r[i].h / 2)
  ) {
    changeDirection(e,r[i]);
  }
  }
  
}
