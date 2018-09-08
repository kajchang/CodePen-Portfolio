
              var ballx, bally, paddlex, paddley, ballspeedy, ballspeedx, lost, points, paddledirection;

function setup() {
  createCanvas(1000, 600);
  
  // set ball position
  ballx = width - 50;
  bally = height / 2;
  
  // set ball speed
  ballspeedx = 7;
  ballspeedy = 7;
  
  // set paddle position
  paddlex = 20;
  paddley = height / 2;
  
  // set points
  points = 0;
}

function draw() {
  background(0);
  
  // paddle
  rect(paddlex, paddley, 20, 150);
  
  // move paddle
  
  if (paddledirection !== null) {
    if (paddledirection === "UP") {
      paddley -= 5;
    } else if (paddledirection === "DOWN") {
      paddley += 5;
    }
  }
  
  // ball
  ellipse(ballx, bally, 40, 40);

  // move ball
  ballx += ballspeedx;
  bally += ballspeedy;
  
  // bounce if on right wall or on paddle
  if (ballx > width || (ballx <= paddlex + 20 && bally < paddley + 150 && bally > paddley)) {
    ballspeedx = -ballspeedx;
    
    if (ballx <= paddlex + 20 && bally < paddley + 150 && bally > paddley) {
      // increment points
      points++;
    }
  }
  
  // bounce on top and bottom
  if (bally < 0 || bally > height) {
    ballspeedy = -ballspeedy;
  }
  
  // lose if touches left wall
  if (ballx < 0) {
    fill(255);
    textSize(25);
    text(`You Lose!
You scored ` + points + ` Points
Press R to Restart`, width / 2, height / 2);
    lost = true;
    points = 0;
    noLoop();
  }
  
  // don't go off screen
  if (paddley < 0) {
    paddley = 0;
  } else if (paddley > height - 150) {
    paddley = height - 150;
  }
}

function keyPressed() {
  // move paddle
  if (keyCode === DOWN_ARROW) {
    paddledirection = "DOWN";
  } else if (keyCode === UP_ARROW) {
    paddledirection = "UP";
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
    paddledirection = null;
  }
  
  return false;
}

            