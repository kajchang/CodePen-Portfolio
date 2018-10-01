class Ball {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  
  moveTowards(x, y) {
    var x_dist = this.x - x;
    var y_dist = this.y - y;
    
    if (x_dist > 5) {
      this.x -= this.speed;
    } else if (x_dist < -5) {
      this.x += this.speed;
    }
    
    if (y_dist > 5) {
      this.y -= this.speed;
    } else if (y_dist < -5) {
      this.y += this.speed;
    }
  }
  
  draw() {
    fill("yellow");
    ellipse(this.x, this.y, 50, 50);
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas.position(0, 0);
  
  ball = new Ball(0, 0, 10);
}

function draw() {
  background(0);
  
  ball.draw();
  
  if (mouseIsPressed) {
    ball.moveTowards(mouseX, mouseY);
  }
}