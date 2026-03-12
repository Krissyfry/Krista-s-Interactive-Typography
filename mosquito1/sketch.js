let word = "MOSQUITO";

async function setup() {
  createCanvas(900, 500);
  textAlign(CENTER, CENTER);
  textSize(44);
  textFont("monospace");
}

function draw() {
  background(248);

  noFill();
  stroke(160);
  strokeWeight(2);
  beginShape();
  vertex(120, 300);
  bezierVertex(200, 220, 360, 220, 470, 250);
  bezierVertex(560, 275, 660, 260, 740, 230);
  bezierVertex(790, 215, 820, 230, 835, 260);
  bezierVertex(845, 290, 820, 320, 770, 330);
  bezierVertex(650, 350, 470, 340, 300, 345);
  bezierVertex(210, 348, 150, 335, 120, 300);
  endShape();

  fill(0);
  noStroke();

  let gap = 68;
  let start = width / 2 - (word.length - 1) * gap / 2;

  for (let i = 0; i < word.length; i++) {
    let x = start + i * gap;
    let n = noise(i * 0.2, frameCount * 0.03);
    let dx = map(n, 0, 1, -10, 10);
    let dy = sin(frameCount * 0.35 + i) * 6;

    push();
    translate(x + dx, height / 2 + dy - 10);
    rotate(map(noise(i * 0.3 + 50, frameCount * 0.04), 0, 1, -0.25, 0.25));
    text(word[i], 0, 0);
    pop();
  }
}