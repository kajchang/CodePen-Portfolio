var trail;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);

  background(0);
  
  trail = [];
}

function draw() {
  background(0);
  fill(255, 255, 0);
  
  if (frameCount % 2 == 0) {
    trail.push({x: mouseX, y: mouseY}); 
  }
  
  for (piece of trail) {
    ellipse(piece.x, piece.y, 10);
  }
  
  if (trail.length > 60) {
    trail.shift();
  }
}