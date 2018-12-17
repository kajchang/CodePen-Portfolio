var player, foods, slaves;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	
	player = new Player('green', width / 2, height / 2, 10, 0.01);
	foods = [];
	slaves = [];
	
	for (let i = 0; i < 10; i++) {
		foods.push(new Food(random(width), random(height), random(1, player.size * 1.25), [random(255), random(255), random(255)]));
	}
}

function draw() {
	background('lightgray');
	
	player.draw();
	player.move();
	
	for (let food of foods) {
		food.draw();
		
		if (dist(food.x, food.y, player.x, player.y) < player.size / 2 && player.size > food.size) {
			player.size += food.size / 5;
			foods.splice(foods.indexOf(food), 1);
		}
	}
	
	for (let slave of slaves) {
		slave.draw();
		slave.move(player);
	}
	
	if (random(100) < 1 && foods.length < 100) {
		foods.push(new Food(random(width), random(height), random(1, player.size * 1.25), [random(255), random(255), random(255)]));
	}
}

class Player {
	constructor(color, x, y, size, speed) {
		this.color = color;
		this.x = x;
		this.y = y;
		this.size = size;
		this.speed = speed;
	}
	
	draw() {
		push();
		fill(this.color);
		textAlign();
		ellipse(this.x, this.y, this.size);
		pop();
	}
	
	move() {
		var distX = this.x - mouseX;
		var distY = this.y - mouseY;
		
		this.x -= distX * this.speed;
		this.y -= distY * this.speed;
	}
}

class Slave extends Player {
	move(master) {
		var distX = this.x - mouseX;
		var distY = this.y - mouseY;
		
		this.x -= distX * this.speed;
		this.y -= distY * this.speed;
		
		if (dist(this.x, this.y, master.x, master.y) < master.size / 2) {
			this.x += distX * this.speed + this.size;
			this.y += distY * this.speed + this.size; 
		}
	}
}

class Food {
	constructor(x, y, size, color) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = color;
	}
	
	draw() {
		push();
		fill(this.color);
		ellipse(this.x, this.y, this.size);
		pop();
	}
}

function keyPressed() {
	if (keyCode === 32) {
		if (player.size > 25) {
			player.size /= 2;
			slaves.push(new Slave (player.color, player.x + random(-player.size * 2, player.size * 2), player.y + random(-player.size * 2, player.size * 2), player.size, player.speed));	
		}
	}
}