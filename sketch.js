let e;
let l;
let r;
let img;

function setup() {
  createCanvas(600, 400);
  e = new Enemy(200, 50, 50, 50);
  r = new RightTurn(350,100,60,60);
  l = new LeftTurn(200, 200, 60, 60);
  img= loadImage("map.jpg")
}

function draw() {
  background(220);
  
   r.display();
  l.display();
  image(img,0,0,600,400)
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
  if (
    Math.abs(e.x - l.x) < Math.abs(e.w / 2 + l.w / 2) &&
    Math.abs(e.y - l.y) < Math.abs(e.h / 2 + l.h / 2)
  ) {
    changeDirection(e,l);
  }

  if (
    Math.abs(e.x - r.x) < Math.abs(e.w / 2 + r.w / 2) &&
    Math.abs(e.y - r.y) < Math.abs(e.h / 2 + r.h / 2)
  ) {
    changeDirection(e,r);
  }
}
