let e;

function setup() {
  createCanvas(400, 400);
  e = new Enemy(200,50,50,50);
}

function draw() {
  background(220);
  e.display()
}
