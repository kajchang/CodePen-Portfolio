/* 
Draws squares using a recursive function that moves the square to the right or down a row depending on the previous position of the square and changes to color by a random value based on the previous color.
*/

function computeMaxCallStackSize() {
    try {
        return 1 + computeMaxCallStackSize();
    } catch (e) {
        // Call stack overflow
        return 1;
    }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noStroke();
}

function draw() {
  /*
    can't get this right...
    starting equation should be:
    size^2 * MaxCallStackSize = width * height
    isolating size:
    size^2 = (width * height) / MaxCallStackSize
    size = sqrt((width * height) / MaxCallStackSize)
    call stack computation might be wrong?
    I'm just leaving it for now as a non-functioning version.
  */
  var size = sqrt((width * height) / computeMaxCallStackSize());

  recursiveSquare(0, 0, size, [random(255), random(255), random(255)]);
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