
              function setup() {
  createCanvas(windowWidth, windowHeight);
  background("purple");
}

function draw() {
  face(random(width), random(height), [random(255),random(255),random(255)], [random(255),random(255),random(255)], random(50, 200));
}

function face(x, y, facecolor, eyecolor, size) {
  fill(facecolor);
  ellipse(x, y, size, size);
  arc(x, y, 60, 60, PI/8, 7*PI/8);
  fill(eyecolor);
  ellipse(x + 10, y - 10, 10, 15);
  ellipse(x - 10, y - 10, 10, 15);
}

            