var ball, paddle, points, lost;

class Ball {
  constructor(x, y, speedx, speedy) {
    this.x = x;
    this.y = y;
    this.speedx = speedx;
    this.speedy = speedy;
  }
  
  draw() {
    ellipse(this.x, this.y, 40, 40);
  }
  
  move() {
    // move ball
    this.x += this.speedx;
    this.y += this.speedy;
  
    // bounce if on right wall or on paddle
    if (this.x > width || (this.x <= paddle.x + 20 && this.y < paddle.y + 150 && this.y > paddle.y)) {
      this.speedx = -this.speedx;
    
      if (this.x <= paddle.x + 20 && this.y < paddle.y + 150 && this.y > paddle.y) {
        // increment points
        points++;
      }
    } else if (this.y < 0 || this.y > height) {
      this.speedy = -this.speedy;
    } else if (this.x < 0) {
      text(`You Lose!
You scored ` + points + ` Points
Press R to Restart`, width / 2, height / 2);
      lost = true;
      noLoop();
    }
  }
}

class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction;
  }
  
  draw() {
    rect(this.x, this.y, 20, 150);
  }
  
  move() {
    if (this.directio  !== null) {
      if (this.direction === "UP") {
        this.y -= 5;
      } else if (this.direction === "DOWN") {
        this.y += 5;
      }
    }
    
    // don't go off screen
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y > height - 150) {
      this.y = height - 150;
    }
  }
}

function setup() {
  createCanvas(800, 400);

  ball = new Ball(width - 50, height / 2, 7, 7);
  paddle = new Paddle(20, height / 2);
  
  // set points
  points = 0;
  fill(255);
}

function draw() {
  background(0);
  
  paddle.draw();
  paddle.move();

  ball.draw();
  ball.move();
  
  textSize(25);
  text(String(points), 10, 20);
}

function keyPressed() {
  // move paddle
  if (keyCode === DOWN_ARROW) {
    paddle.direction = "DOWN";
  } else if (keyCode === UP_ARROW) {
    paddle.direction = "UP";
  }
  
  // reset game
  if (lost && key === "r") {
    lost = false;
    setup();
    loop();
  }
  
  return false;
}

function keyReleased() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    paddle.direction = null;
  }
  
  return false;
}