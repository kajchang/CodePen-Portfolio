function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  /*
  var x = 0;
  while (x < 100){
    fill(x / 100 * 255);
	  ellipse(x * width / 100, height / 2, width / 100, width / 100);
	  x++;
  }*/
  
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 10; y++) {
      ellipse(width / 100 * x, height / 10 * y, width/ 100, width / 100);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}