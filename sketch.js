var prince=5;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseX,mouseY,216,230); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0) // an RGB color for the circle's border
  fill(255,192,203); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20); // center of canvas, 20px dia
  stroke(0,0,0);
  fill(255,192,203);
  ellipse(prince,70,20,20);
  textFont('Helvetica');
  textSize(30);
  text('ALL HAIL SICK',175,250);
}

function mousePressed(){s
  if(prince=prince+5){
    prince+0;
  }else{
    prince+2;
  }

  }