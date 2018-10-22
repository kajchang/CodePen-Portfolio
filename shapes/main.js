var x, y;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);

  noStroke();
  
  x = -width / 2;
  y = -height / 2;
  
  background(0);
}

function draw() {
  my_draw();
}

function my_draw() {
  background(0);
  for (let i = 0; i < 255; i++)  {
    push();
    fill(255 - cos(i) * 255, 255 - tan(i) * 255, 255 - cos(i) * 255);
    translate(random(-i, i), random(-i, i), random(-i, i));
    sphere((255 - i) / 10);
    pop();
  }
  /*for (let i = 0; i < 10; i++) {
    push();
    fill(i * 10);
    translate(x, y);
    sphere(10);
    x += 10;
    if (x > width / 2) {
      x = -width / 2;
      y += 10;
    }
    pop();
  }*/
}