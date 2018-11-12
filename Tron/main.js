var cursor, robot, map;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);

  background(0);
  
  cursor = new LightCycle([0, 255, 255], 5, round(height / 2), "right");
  robot = new RobotCycle([255, 255, 0], width - 5, round(height / 2), "left");
  
  stroke(255);

  line(0, 5, width, 5);
  line(0, height - 5, width, height - 5);
  line(5, 0, 5, height);
  line(width - 5, 0, width - 5, height);

  map = {
    left: "right",
    right: "right",
    up: "down",
    down: "up"
  };
}

function draw() {
  // human controls
  
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      cursor.direction = "right";
    } else if (keyCode == LEFT_ARROW) {
      cursor.direction = "left";
    } else if (keyCode == DOWN_ARROW) {
      cursor.direction = "down";
    } else if (keyCode == UP_ARROW) {
      cursor.direction = "up";
    }
  }

  cursor.advance();
  robot.advance();
}

class LightCycle {
  constructor(color, x, y, starting_direction) {
    this.prevX = x;
    this.prevY = y;
    this.x = this.prevX;
    this.y = this.prevY;
    this.speed = 5;
    this.color = color;
    this.direction = starting_direction;
  }
  
  move(direction) {
    if (direction == "down") {
      this.y += this.speed;
    } else if (direction == "up") {
      this.y -= this.speed;
    } else if (direction == "right") {
      this.x += this.speed;
    } else if (direction == "left") {
      this.x -= this.speed;
    }
  }
  
  advance() {
    this.move(this.direction);
    
    if (this.isDead(this.x, this.y)) {
      noLoop();
    }

    this.draw();
  }
  
  draw() {
    stroke(this.color);

    line(this.prevX, this.prevY, this.x, this.y);

    this.prevX = this.x;
    this.prevY = this.y;
  }
  
  isDead(x, y) {
    if (this.direction === "right") {
      for (let x_ = x; x_ > x - this.speed; x_--) {
        if (this.isDeath(x_, y)) {
          return true;
        }
      }
    } else if (this.direction === "left") {
      for (let x_ = x; x_ < x + this.speed; x_++) {
        if (this.isDeath(x_, y)) {
          return true;
        }
      }
    } else if (this.direction === "down") {
      for (let y_ = y; y_ < y + this.speed; y_++) {
        if (this.isDeath(x, y_)) {
          return true;
        }
      }
    } else if (this.direction === "up") {
      for (let y_ = y; y_ > y - this.speed; y_--) {
        if (this.isDeath(x, y_)) {
          return true;
        }
      }
    }
    
    return false;
  }
  
  isDeath(x, y) {
    const position = get(x, y);
    
    return position[0] != 0 || position[1] != 0 || position[2] != 0 || position[3] != 255 || x > width || x < 0 || y > height || y < 0;
  }
}

class RobotCycle extends LightCycle {
  advance() {
    this.move(this.direction);
    
    if (this.isDead(this.x, this.y)) {
      this.x = this.prevX;
      this.y = this.prevY;

      var possible_directions = ["up", "down", "left", "right"];
      possible_directions.splice(possible_directions.indexOf(map[this.direction]), 1);
      possible_directions.splice(possible_directions.indexOf(this.direction), 1);
      for (let direction of possible_directions) {
        this.move(direction);
        if (this.isDead(this.x, this.y)) {
          possible_directions.splice(possible_directions.indexOf(direction), 1);
        }
        this.x = this.prevX;
        this.y = this.prevY;
      }
      this.direction = possible_directions[floor(random(0, possible_directions.length))];
      this.move(this.direction);
    }

    if (this.isDead(this.x, this.y)) {
      noLoop();
    }

    this.draw();
  }
}