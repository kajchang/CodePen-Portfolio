
              var rects;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rects = [];

  fill(0);
}

function draw() {
  background(255);

  for (let rect_ of rects) {
    drawRectangle(rect_);
  }

  if (keyIsPressed) {
    rects.push(createRectangle(random(width), 5, 10, random(1, 3)));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createRectangle(x, y, size, speed) {
  return {x: x, y: y, size: size, speed: speed, bounced: false};
}

function drawRectangle(rect_) {
  rect(rect_.x, rect_.y, rect_.size, rect_.size);
  rect_.y += rect_.speed;

  if (rect_.y > height) {
    rect_.speed = -rect_.speed;
    rect_.speed++;
  }
  
   if (rect_.y < 0) {
    rect_.speed = -rect_.speed;

   }
   
}

            