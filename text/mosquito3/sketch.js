let x = 500, y = 315, trail = [];

async function setup() {
  createCanvas(900, 600);
  textAlign(CENTER, CENTER);
  textFont("monospace");
}

function draw() {
  background(245, 239, 232);

  noStroke();
  fill(226, 198, 178);

  beginShape();
  vertex(110, 310);
  bezierVertex(180, 260, 320, 250, 470, 255);
  bezierVertex(590, 258, 675, 270, 730, 288);
  bezierVertex(760, 250, 790, 225, 820, 220);
  bezierVertex(835, 220, 842, 232, 836, 246);
  bezierVertex(830, 260, 812, 270, 792, 278);
  bezierVertex(815, 280, 842, 286, 852, 300);
  bezierVertex(860, 315, 850, 328, 832, 330);
  bezierVertex(810, 332, 785, 326, 760, 315);
  bezierVertex(780, 325, 804, 338, 812, 354);
  bezierVertex(820, 370, 808, 382, 788, 380);
  bezierVertex(766, 377, 742, 360, 720, 335);
  bezierVertex(728, 352, 735, 372, 732, 390);
  bezierVertex(728, 405, 714, 410, 702, 402);
  bezierVertex(682, 390, 668, 362, 655, 330);
  bezierVertex(520, 350, 330, 360, 110, 350);
  endShape(CLOSE);

  fill(215, 120, 120, 55);
  ellipse(500, 320, 110, 85);

  fill(195, 85, 85, 95);
  ellipse(500, 320, 55, 40);

  if (frameCount > 35) {
    x += 2.4;
    y += sin(frameCount * 0.12) * 1.8 - 0.7;

    if (frameCount % 5 == 0) {
      trail.push({ x: x, y: y });
    }
  }

  stroke(120, 35, 35, 150);
  strokeWeight(2);

  for (let i = 0; i < trail.length; i++) {
    line(trail[i].x - 5, trail[i].y, trail[i].x + 5, trail[i].y);
  }

  fill(20);
  noStroke();
  textSize(22);
  text("MOSQUITO", x, y);
}