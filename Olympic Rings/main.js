
              function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(10);
  smooth();
  noFill();
}

function draw() {
  // Yellow Circle
  stroke(255, 255, 0);
  ellipse(115, 125, 100, 100);
  
  // Green Circle
  stroke(30, 139, 34);
  ellipse(235, 125, 100, 100);
  
  // Blue Circle
  stroke(0, 0, 255);
  ellipse(65, 75, 100, 100);
  
  // Black Circle
  stroke(0);
  ellipse(180, 75, 100, 100);
  
  // Red Circle
  stroke(255, 0, 0);
  ellipse(295, 75, 100, 100);
}

            