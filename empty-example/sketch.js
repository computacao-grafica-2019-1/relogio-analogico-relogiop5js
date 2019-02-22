var x = 200;
var y = 200;
var h = 200;
var w = 200;

var raio = 80;

var numHora = 3

var raioNum = 50;


function setup() {
  createCanvas(400, 400);
	
	
}

function draw() {
  background(220);
	noFill();
	stroke(4);
	strokeWeight(3);
	ellipse(x, y, w, h);
	ellipse(x, y, w - 20, h - 20);
	
	fill(51);
	noStroke();
	ellipse(x, y, w / 20, h / 20);
	
	stroke(51);
	line(x, y, x, y - 70);
	line(x, y, x + 50, y);
	
	triangle(x - 5, y - 70, x + 5, y - 70, x, y - 80);
	
	triangle(x + 50, y + 5, x + 60, y, x + 50, y - 5);
	
	noFill();
	strokeWeight(1);
	
	for (var angulo = 0; angulo <= 360; angulo += 30) {
    // transforma o angulo de
    // coord polar para coord cartesiana
    var x2 = cos(radians(angulo)) * raio;
    var y2 = sin(radians(angulo)) * raio;

  
    
    // corrige (x2,y2) para (x+cx,y+cy)
    text(numHora, x2 + (x / 2) + 95, y2 + (y / 2) + 105);
    noFill();
    noLoop();
    if(numHora < 12){
    	numHora++;
    }
    else{
    	numHora = 1;
    }
  }
	

}