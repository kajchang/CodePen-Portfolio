/* 
Draws squares using a recursive function that moves the square to the right or down a row depending on the previous position of the square and changes to color by a random value based on the previous color.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noStroke();
}

function draw() {
  recursiveSquare(0, 0, 10, [random(255), random(255), random(255)]);
  noLoop();
}

function recursiveSquare(x, y, size, color) {
  fill(color);
  rect(x, y, size, size);
  if (x < width) {
    recursiveSquare(x + size, y, size, [color[0] += random(-5, 5), color[1] += random(-5, 5), color[2] += random(-5, 5)]);
  } else if (y < height) {
    recursiveSquare(0, y + size, size, [color[0] += random(-5, 5), color[1] += random(-5, 5), color[2] += random(-5, 5)]);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  loop();  
}

function keyPressed() {
  loop(); 
}