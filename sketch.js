let e;
let l;
let r;

function setup() {
  createCanvas(400, 400);
  e = new Enemy(200,50,50,50);
  r = new RightTurn(200,200,60,60);
  l = new LeftTurn(300,200,60,60);
}

function draw() {
  background(220);
  e.display();
  e.update();
  r.display();
  l.display();
  checkForTurns();
}

//check to see if we collide with
//a leftTurn, or rightTurn
function checkForTurns(){
  
}
