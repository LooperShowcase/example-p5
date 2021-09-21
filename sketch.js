function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("gray");
  translate(width / 2, height / 2);
  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();
  noFill();
  stroke("#9BC53D");
  strokeWeight(8);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  stroke("white");
  rotate(secondAngle);
  line(0, 0, 150, 0);
  pop();

  let minuteAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 250, 250, 0, minuteAngle);

  push();
  stroke("white");
  rotate(minuteAngle);
  line(0, 0, 120, 0);
  pop();

  let hoursAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hoursAngle);

  push();
  stroke("white");
  rotate(hoursAngle);
  line(0, 0, 100, 0);
  pop();
  //point
  push();
  stroke("black");
  strokeWeight(10);
  point(0, 0);
  pop();
}
