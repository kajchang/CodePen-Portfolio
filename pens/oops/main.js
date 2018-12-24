var puffer;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	
	puffer = new Puffer(width / 2, height / 2, 100);
}

function draw() {
	background(0, 255, 255);

	puffer.draw();
	
	if (keyIsPressed) {
		if (keyCode === UP_ARROW) {
			puffer.inflate();
		} else if (keyCode === DOWN_ARROW) {
			puffer.deflate();
		}
		
		if (key === 'w') {
			puffer.y--;
		} else if (key === 's') {
			puffer.y++;
		} else if (key === 'd') {
			puffer.x++;
		} else if (key === 'a') {
			puffer.x--;
		}
		
		if (puffer.x + puffer.size / 2 < 0) {
			puffer.x = width;
		} else if (puffer.x - puffer.size / 2 > width) {
			puffer.x = 0;
		}
		
		if (puffer.y + puffer.size / 2 < 0) {
			puffer.y = height;
		} else if (puffer.y - puffer.size / 2 > height) {
			puffer.y = 0;
		}
	}
}

class Puffer {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		
		this.maxSize = size * 2;
		this.minSize = size / 2;
		
		this.spikes = Array(10)
			.fill(undefined)
			.map(() => [random(-this.size / 2, this.size / 2), random(-this.size / 2, this.size / 2),])
	}
	
	draw() {
		push();
		noStroke();

		fill(255, 100, 0);
		ellipse(this.x, this.y, this.size);
		
		fill(255);
		ellipse(this.x - this.size / 3, this.y - this.size / 5, this.size / 5);
		ellipse(this.x + this.size / 3, this.y - this.size / 5, this.size / 5);
		
		fill(0);
		ellipse(this.x - this.size / 3, this.y - this.size / 5 + this.size / 25, this.size / 10);
		ellipse(this.x + this.size / 3, this.y - this.size / 5 + this.size / 25, this.size / 10);
		
		fill(220, 20, 60);
		
		for (let spike of this.spikes) {
			push();
			translate(spike[0], spike[1]);
			triangle(
				this.x, 
				this.y - this.size / 10, 
				this.x - this.size / 10, 
				this.y,
				this.x + this.size / 10, 
				this.y, 
			);
			pop();	
		}
		
		pop();
	}
	
	inflate() {
		if (this.size >= this.maxSize) return;
		this.size++;
	}
	
	deflate() {
		if (this.size <= this.minSize) return;
		this.size--;
	}
}