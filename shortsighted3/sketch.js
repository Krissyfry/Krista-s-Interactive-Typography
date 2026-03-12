let word = "SHORTSIGHTED";
let ang = [];

async function setup() {
  createCanvas(900, 650);
  textAlign(CENTER, CENTER);

  for (let r = 0; r < 7; r++) {
    ang[r] = [];
    for (let j = 0; j < word.length; j++) {
      ang[r][j] = random([HALF_PI, PI, PI + HALF_PI]);
    }
  }
}

function draw() {
  background(248);

  for (let r = 0; r < 7; r++) {
    let fs = 54 - r * 5;
    textSize(fs);
    let y = 80 + r * 78;
    let gap = fs * 1.4;
    let start = width / 2 - (word.length - 1) * gap / 2;

    for (let j = 0; j < word.length; j++) {
      let x = start + j * gap;
      let hover = dist(mouseX, mouseY, x, y) < fs * 0.35;

      push();
      translate(x, y);
      rotate(hover ? 0 : ang[r][j]);
      fill(20);
      text(word[j], 0, 0);
      pop();
    }
  }
}