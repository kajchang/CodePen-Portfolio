
              function setup() {
  createCanvas(600, 600);
  noStroke();
  
  // colors
  pink = color(255, 192, 103);
  black = color(0);
}

function draw() {
  fill(pink);
  
  // tentacles
  rect(215, 160, 50, 100);
  rect(330, 160, 50, 100);
  rect(275, 170, 50, 100);
  rect(160, 175, 50, 100);
  
  // body
  rect(120, 80, 300, 100);
  ellipse(270, 80, 300, 150);
  
  fill(black);

  // eyes
  ellipse(200, 90, 20, 20);
  ellipse(300, 90, 20, 20);
}

            