
              var sky;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  sky = new Sky(document.getElementById("stars").value);
}

function draw() {
  background(0);
  
  sky.draw();
}

class Sky {
  constructor(size) {
    this.stars = [];
    for (let x = 0; x < size; x++) {
      this.stars.push(new Star(random(width), random(height)));
    }
  }
  
  draw() {
    for (let star of this.stars) {
      star.move();
      star.draw();
      star.connect(this.stars[Math.round(random(this.stars.length - 1))]);
    } 
  }
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1); 
  }
  
  draw() {
    stroke(255);
    fill(255);
    ellipse(this.x, this.y, 5, 5);
  }
  
  connect(otherStar) {
    stroke(255, 233, 0);
    line(this.x, this.y, otherStar.x, otherStar.y);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    document.getElementById("stars").value++;
    updateSky();
  } else if (keyCode === DOWN_ARROW) {
   if (document.getElementById("stars").value > 1) {
    document.getElementById("stars").value--;
    updateSky();
   }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateSky();
}

function updateSky() {
  sky = new Sky(document.getElementById("stars").value);
}

            