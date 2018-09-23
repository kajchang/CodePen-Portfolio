
              var butterflies;

// handlers called by the butterfly but access global variables

function die() {
  if (butterflies.length !== 1) {
    butterflies.splice(butterflies.indexOf(this), 1); 
  }
}

function layEgg() {
  butterflies.push(new Butterfly(random(10, 20), this.x, this.y, layEgg, die));
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  butterflies = [];

  butterflies.push(new Butterfly(random(10, 20), random(width), random(height), layEgg, die));
}

function draw() {
  background("lightblue");
  
  for (let butterfly of butterflies) {
    butterfly.live();
    butterfly.draw();
  }
}

class Butterfly {
  constructor(size, x, y, layEggBehavior, deathBehavior) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.state = "Egg";
    this.age = 0;
    
    this.layEgg = layEggBehavior.bind(this);
    this.die = deathBehavior.bind(this);
  }
  
  live() {
    this.age++;
    
    // Growing Up
    if (this.age > 300 && this.state === "Egg") {
      this.state = "Caterpillar";
      this.size += 5;
    } else if (this.age > 600 && this.state === "Caterpillar") {
      this.state = "Butterfly";
      this.size += 5;
    }
    
    // Doing their thing
    if (this.state === "Caterpillar") {
      if (this.x > width) {
        this.x = width;
      } else if (this.x < 0) {
        this.x = 0;
      } else {
        this.x += random(-5, 5); 
      }
    } else if (this.state === "Butterfly") {
      this.x += random(-5, 5);
      
      if (this.x > width) {
        this.x = width;
      } else if (this.x < 0) {
        this.x = 0;
      } else if (this.y > 0) {
        this.y -= random(-2, 5);
      } else {
        this.y = height;
      }
      
      var howDidThisYearGo = random(100);
      if (howDidThisYearGo <= 2) {
        this.layEgg();
      } else if (howDidThisYearGo >= 99) {
        this.die();
      }
    }
  }

  draw() {
    if (this.state === "Egg") {
      fill("yellow");
      ellipse(this.x, this.y, this.size, this.size); 
    } else if (this.state === "Caterpillar") {
      fill("yellow");
      ellipse(this.x, this.y, this.size * 3, this.size);

      fill("black");
      ellipse(this.x - this.size, this.y, 1, 1);
    } else if (this.state === "Butterfly") {
      fill("yellow");
      ellipse(this.x, this.y, this.size, this.size * 3);

      fill("purple");
      triangle(this.x - 10, this.y, this.x - 40, this.y - 40, this.x - 40, this.y + 40);
      
      triangle(this.x + 10, this.y, this.x + 40, this.y - 40, this.x + 40, this.y + 40);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

            