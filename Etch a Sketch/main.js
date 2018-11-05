var cursor;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);

  background(0);
  
  cursor = {
    prevX: 0,
    prevY: 0,
    x: 0,
    y: 0
  };
  
  stroke(255);
}

function draw() {
  line(cursor.prevX, cursor.prevY, cursor.x, cursor.y);
  cursor.prevX = cursor.x;
  cursor.prevY = cursor.y;
  
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW && cursor.x < width) {
      cursor.x += 5;
    } else if (keyCode == LEFT_ARROW && cursor.x > 0) {
      cursor.x -= 5;
    } else if (keyCode == DOWN_ARROW && cursor.y < height) {
      cursor.y += 5;
    } else if (keyCode == UP_ARROW && cursor.y > 0) {
      cursor.y -= 5;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}