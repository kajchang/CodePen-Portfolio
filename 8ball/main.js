var answers = ["outlook not so good",
"don't count on it",
"my sources say no",
"without a doubt",
"reply hazy, try again", 
"it is certain", 
"my reply is no", 
"as I see it yes", 
"most likely",
"you may rely on it",
"cannot predict now",
"better not tell you now",
"very doubtful", 
"outlook good",
"yes definitely",
"ask again"]

var jiggling = false;
var x_jiggle, y_jiggle, randomness, question;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  textAlign(CENTER);
  
  randomness = 0;
  
  background(50);
  draw8Ball(width / 2, height / 2, width / 2);
}

function draw() {
  if (randomness > 0) {
    background(50);
    
    x_jiggle = random(-randomness, randomness);
    y_jiggle = random(-randomness, randomness);

    draw8Ball(width / 2 + x_jiggle, height / 2 + y_jiggle, width / 2);
    
    randomness -= 0.5;
    
    if (randomness === 0) {
      fill(0);
      textSize(12);
      text(answers[floor(random(0, answers.length))], width / 2 + x_jiggle, height / 2 + y_jiggle);
       document.getElementsByTagName("input")[0].value = "";
    }
    
    if (question !== undefined) {
      fill(0);
      textSize(32);
      text("Current Question Is: " + question, width / 2, height - 10);
    }
  }
}

function draw8Ball(x, y, size) {
  fill(0);
  ellipse(x, y, size);
  fill(255);
  triangle(x + 100, y + 50, x - 100, y + 50, x, y - 100)
}

document.getElementsByTagName("button")[0].onclick = () => {
  if (randomness === 0) {
    randomness = 50;
    question = document.getElementsByTagName("input")[0].value;
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (randomness === 0) {
      randomness = 50;
      question = document.getElementsByTagName("input")[0].value;
    }
  }
}