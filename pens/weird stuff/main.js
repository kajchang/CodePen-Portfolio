var incrementor, background_color;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	
	r = random(-2.5, 2.5);
	b = random(-2.5, 2.5);
	g = random(-2.5, 2.5);

	background_color = [0, 0, 0];
	
	textAlign(CENTER);
}

function draw() {
	background(background_color);
	
	background_color[0] += r;
	background_color[1] += g;
	background_color[2] += b;
	
	if (background_color[0] > 255 || background_color[0] < 0) {
		r = -r;
	}
	
	if (background_color[1] > 255 || background_color[1] < 0) {
		b = -b;
	}
	
	if (background_color[2] > 255 || background_color[2] < 0) {
		g = -g;
	}
	
	multicolor_text('hi');
}

function multicolor_text(string) {
	textSize(width / string.length / 3);

	push();
	fill(random(255), random(255), random(255));
	text(string, width / 2, height / 2);
	pop();
}