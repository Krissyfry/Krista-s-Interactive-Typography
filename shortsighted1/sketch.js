let word = "shortsighted";

async function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  textSize(64);
}

function draw() {
  background(245);

  translate(width / 2, height / 2);

  let hover = dist(mouseX, mouseY, width / 2, height / 2) < 180;

  push();

  if (!hover) {
    scale(-1, 1);
  }

  fill(20);
  text(word, 0, 0);

  pop();
}