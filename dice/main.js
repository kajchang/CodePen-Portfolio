var dice, numberOfDice, money, bet, betOn, odd_button, even_button;

function setup() {
  bet = 5;
  money = 100;
  numberOfDice = 5;
  dice = [];

  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas.position(0, 0);
  for (x = 0; x < numberOfDice; x++) {
    dice.push(new Dice(randomDiePosition(), 0));
  }
  
  odd_button = createButton("Bet Odd");
  odd_button.position(width / 4 - 100, height / 1.15);
  odd_button.mousePressed(betOdd);
  
  even_button = createButton("Bet Even");
  even_button.position(width * 3 / 4 - 100, height / 1.15);
  even_button.mousePressed(betEven);
  
  noStroke();
}

function draw() {
  background(50);
  
  fill(200);
  rect(0, height - height / 5, width, height / 5);
  
  for (die of dice) {
    die.draw();
    die.move();
  }
  
  fill(255);
  textSize(width / 25);
  text("Total: " + dice.reduce((acc, cur) => acc + cur.value, 0), width / 16, width / 16);
  text("Money: " + money + "$", width / 16, width / 8);
  
  textSize(width / 33);
  fill(0);
  if (bet > 0) {
    text("Bet: " + bet, width / 2 - 100, height * 15 / 16);   
  } else {
    textSize(width / 10);
    fill(255);
    text("You Lose!", width * 5 / 16, height / 2);
    even_button.remove();
    odd_button.remove();
    
    noLoop();
  }
  
  if (dice[0].y >= height - dice[0].size - height / 5) {
    if (betOn !== undefined) {
      if (betOn.test(dice.reduce((acc, cur) => acc + cur.value, 0))) {
      money += bet * betOn.value;
    }
    
    betOn = undefined; 
    }
    
    if (money < bet) {
      bet = money;
    }
  }
}

class Bet {
  constructor(name, test_func, value) {
    this.name = name;
    this.test_func = test_func;
    this.value = value;
  }
  
  test(sum) {
    return this.test_func(sum);
  }
}

class Dice {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value = this.roll();
    this.size = 50;
  }
  
  roll() {
    return ceil(random(0, 6));
  }
  
  reset() {
    this.x = randomDiePosition();
    this.y = 0;
  }
  
  move() {
    if (this.y < height - this.size - height / 5) {
      this.y += 5;
      if (frameCount % 5 === 0) {
        this.value = this.roll(); 
      }
    }
  }
  
  draw() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
    
    if (this.value === 1) {
      fill(0);
      ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size / 5, this.size / 5);
    } else if (this.value === 2) {
      fill(0);
      ellipse(this.x + this.size / 5, this.y + this.size / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size * 4 / 5, 10, 10);
    } else if (this.value === 3) {
      fill(0);
      ellipse(this.x + this.size / 5, this.y + this.size / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size * 4 / 5, 10, 10);
    } else if (this.value === 4) {
      fill(0);
      ellipse(this.x + this.size / 5, this.y + this.size / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size * 4 / 5, 10, 10);
      ellipse(this.x + this.size / 5, this.y + this.size * 4 / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size / 5, 10, 10);
    } else if (this.value === 5) {
      fill(0);
      ellipse(this.x + this.size / 5, this.y + this.size / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size * 4 / 5, 10, 10);
      ellipse(this.x + this.size / 5, this.y + this.size * 4 / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size / 5, 10, 10);
      ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size / 5, this.size / 5);
    } else if (this.value === 6) {
      fill(0);
      ellipse(this.x + this.size / 5, this.y + this.size / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size * 4 / 5, 10, 10);
      ellipse(this.x + this.size / 5, this.y + this.size * 4 / 5, this.size / 5, this.size / 5);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size / 5, 10, 10);
      ellipse(this.x + this.size * 4 / 5, this.y + this.size / 2, this.size / 5, this.size / 5);
      ellipse(this.x + this.size / 5, this.y + this.size / 2, this.size / 5, this.size / 5);
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && money > bet && dice[0].y >= height - die.size - height / 5) {
    bet++;
  } else if (keyCode === DOWN_ARROW && bet > 1 && dice[0].y >= height - die.size - height / 5) {
    bet--;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function betOdd() {
  if (money >= bet && dice[0].y >= height - die.size - height / 5) {
    for (let die of dice) {
      die.reset(); 
    }
    money -= bet;
    betOn = new Bet("odds", sum => sum % 2 == 1, 2);
  }
}

function betEven() {
  if (money >= bet && dice[0].y >= height - die.size - height / 5) {
    for (let die of dice) {
      die.reset(); 
    }
    money -= bet;
    betOn = new Bet("evens", sum => sum % 2 == 0, 2);
  }
}

function randomDiePosition() {
  // prevents die overlapping
  var pos = random(width - 50);
  
  for (die of dice) {
    if (abs(die.x - pos) <= 50) {
      return randomDiePosition();
    }
  }
  
  return pos;
}