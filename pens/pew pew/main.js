var bullets, guns, targets;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  
  bullets = [];
  
  guns = [new Gun(() => 0, () => height / 2)];
  
  targets = [new Target(random(-width, width), 450)];
  
  setInterval(() => targets.push(new Target(random(-width, width), 450)), 500);
}

function draw() {
  background("gray");
  
  for (let bullet of bullets) {
    bullet.move();
    bullet.draw();
    
    for (let target of targets) {
      var touching = target.touching(bullet);
      
      if (touching) {
        bullets.splice(bullets.indexOf(bullet), 1);
        targets.splice(targets.indexOf(target), 1);
      
        document.getElementById("score").innerHTML++;
      }
    }
    
    if (bullet.z < -4000) {
      bullets.splice(bullets.indexOf(bullet), 1);
    }
  }
  
  for (let gun of guns) {
    gun.draw();
  }
  
  for (let target of targets) {
    target.move();
    target.draw();
  }
  
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      for (let target of targets) {
        target.x += 25;
      }
      
      for (let bullet of bullets) {
        bullet.x += 25;
      }
    } else if (keyCode === RIGHT_ARROW) {
      for (let target of targets) {
        target.x -= 25;
      }
      
      for (let bullet of bullets) {
        bullet.x -= 25;
      }
    }
  }
}

function keyPressed() {
  if (key === " ") {
    for (let gun of guns) {
      bullets.push(new Bullet(gun.x_func(), gun.y_func(), -500, 100)); 
    } 
  }
}

class Gun {
  constructor(x_func, y_func) {
    this.x_func = x_func;
    this.y_func = y_func;
  }

  draw() {
    fill(50);

    push();
    // middle
    translate(this.x_func(), this.y_func(), 0);
    box(100, 100, 1000);
    
    // top
    translate(0, -100);
    box(100, 100, 100);
    
    // tip
    fill("orange");
    translate(0, 100, -525);
    box(100, 100, 50);
    pop();
  }
}

class Bullet {
  constructor(x, y, z, speed) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = speed;
  }
  
  move() {
    this.z -= this.speed;
  }
  
  draw() {
	  fill(50);

    push();
    translate(this.x, this.y, this.z);
	  sphere(50);
	  pop();
  }
}

class Target {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.z = -3500;
  }
  
  move() {
    this.z += 10;
  }

  draw() {
    noStroke();
    fill(255, 0, 0);
    
    push();
    translate(this.x, this.y, this.z);
    plane(500); 
    pop();
  }
  
  touching(bullet) {
    if (dist(bullet.x, bullet.y, this.x, this.y) <= 500 && -this.z + bullet.z <= 0) {
      return true;
    } else {
      return false;
    }
  }
}