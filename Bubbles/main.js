var bubbles, mouseBubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bubbles = [];
  
  noStroke();
}

function draw() {
  background(255);
  
  // draw each bubble
  for (let bubble of bubbles) {
    drawBubble(bubble);
  }
  
  if (!mouseIsPressed) {
    // only make bubble half the time
    if (random(100) >= 50) {
      // generate some random values for the bubble
      var x_position = random(winMouseX - 10, winMouseX + 10);
      var y_position = random(winMouseY - 10, winMouseY + 10);
      var size = random(50);
      var speed = random(1, 3);

      // create the bubble
      bubbles.push(createBubble(x_position, y_position, size, speed, randomColor()));
    }
  } else {
    // remake the bubble, but bigger and at the mouse
    mouseBubble = createBubble(mouseX, mouseY, ++mouseBubble.size, 0, mouseBubble.color);
    
    // draw the mouse bubble
    drawBubble(mouseBubble);
  }
}

function drawBubble(bubble) {
  // spread the color triplet
  fill(...bubble.color);
  
  // draw the bubble
  ellipse(bubble.x, bubble.y, bubble.size, bubble.size);
  
  // move the bubble according to its speed
  bubble.y -= bubble.speed;
  
  // remove the bubble from the list if its bottom is off the top of the screen
  if (bubble.y + bubble.size < 0) {
    bubbles.splice(bubbles.indexOf(bubble), 1);
  }
}

function createBubble(x, y, size, speed, color) {
  return {x: x, y: y, size: size, speed: speed, color: color};
}

function randomColor() {
  // earthy color scheme
  var color_triplet = [random(200, 255), random(200, 255), random(255)];

  // aquatic color scheme
  // var color_triplet = [random(255), random(200, 255), random(200, 255)];

  // purpley color scheme
  // var color_triplet = [random(200, 255), random(255), random(200, 255)];

  // muted color scheme
  //var color_triplet = [random(200, 255), random(200, 255), random(200, 255)];
  
  return color_triplet;
}

// resize cavas w/ the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// start the mouseBubble
function mousePressed() {
  mouseBubble = createBubble(mouseX, mouseY, 0, 0, randomColor());
}

// release the mouseBubble
function mouseReleased() {
  mouseBubble.speed = random(1, 3);
  bubbles.push(mouseBubble);
}