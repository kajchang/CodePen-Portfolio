function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  for (let i = 0; i <= 360; i++) {
    push();
    stroke(sin(i) * frameCount % 255, tan(i) * frameCount % 255, cos(i) * frameCount % 255);
    translate(width / 2, height / 2);
    rotate(i * sin(frameCount));
    line(0, 0, width / 3.5, width / 3.5);
    pop();
  }
}