function setup() {
  createCanvas(windowWidth, windowHeight);//size(500, 500);
  background(255);
}

function draw() {
  // put drawing code here
  noStroke;
  fill(200, 40, 200);
  for(let i = 0; i< 5; i++){
    rect(width/2, height/2, 50, 50);
    rect(width/2 + 200, height/2 - 200, 50, 50);
    rect(width/2 + 400, height/2 + 200, 50, 50);
  }
  fill(0);
  stroke(255, 100);
  ellipse(100, 80, 20, 20);
}

function mousePressed(){
  print("hello");

}
