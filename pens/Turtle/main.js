function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = windowWidth;
  y = windowHeight - 250;
  
  angleMode(DEGREES);
  
  frameRate(15);
}

function draw() {
  background("lightblue");
  noStroke();
  
  if (keyCode === LEFT_ARROW && keyIsPressed) {
    // move left
    x -= 15;
  } else if (keyCode === RIGHT_ARROW && keyIsPressed) {
    // move right
    x += 15;
  } else if (keyCode === UP_ARROW && keyIsPressed) {
    // move up
    y -= 15;
  } else if (keyCode === DOWN_ARROW && keyIsPressed) {
    // move down
    y += 15;
  }
  
  // legs
  fill("darkgreen");
  
  if (round(y) % 5 == 0) {
    rect(x - 90, y + 10, 25, 50);
    rect(x - 140, y + 10, 25, 50);
    rect(x - 190, y + 10, 25, 50);
    rect(x - 240, y + 10, 25, 50);
  } else {
    rect(x - 90 + random(5), y + 10, 25, 50);
    rect(x - 140 + random(5), y + 10, 25, 50);
    rect(x - 190 + random(5), y + 10, 25, 50);
    rect(x - 240 + random(5), y + 10, 25, 50);
  }

  // head
  ellipse(x - 265, y + random(2), 100, 50);
  
  // eye
  fill("black");
  ellipse(x - 285, y, 10, 10);

  // shell
  fill("#855723");
  arc(x - 145, y + 25, 200, 150, 180, 0, OPEN);

  // don't go off screeeeeeeeeeeeeen
  if (x <= 0) {
    x = windowWidth;
  } else if (x > windowWidth) {
    x = 0;
  }
  
  if (y > windowHeight) {
    y = windowHeight;
  } else if (y < 0) {
    y = 0;
  }
}