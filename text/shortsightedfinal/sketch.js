let font, pts = [];

async function setup() {
  createCanvas(600, 600);
  pixelDensity(1);

  font = await loadFont("AdobeGothicStd-Bold.otf");
  textFont(font);

  makeLine("SHORTSIGHTED", 110, 52, 0.34);
  makeLine("SHORTSIGHTED", 190, 44, 0.30);
  makeLine("SHORTSIGHTED", 265, 36, 0.27);
  makeLine("SHORTSIGHTED", 335, 30, 0.24);
  makeLine("SHORTSIGHTED", 400, 24, 0.22);
}

function draw() {
  background(250);
  noStroke();

  for (let p of pts) {
    p.move();
    p.show();
  }
}

function makeLine(word, y, fs, sample) {
  textSize(fs);

  let bounds = font.textBounds(word, 0, 0);
  let x = width / 2 - bounds.w / 2 - bounds.x;

  let arr = font.textToPoints(word, x, y, {
    sampleFactor: sample
  });

  for (let p of arr) {
    pts.push(new EyePoint(p.x, p.y));
  }
}

class EyePoint {
  constructor(x, y) {
    this.home = createVector(x, y);
    this.pos = createVector(x, y);
  }

  move() {
    let d = dist(mouseX, mouseY, this.home.x, this.home.y);
    let focus = map(d, 0, 150, 1, 0, true);

    let ox = map(noise(this.home.x * 0.02, frameCount * 0.01), 0, 1, -20, 20);
    let oy = map(noise(this.home.y * 0.02, frameCount * 0.01 + 30), 0, 1, -10, 10);

    this.pos.x = lerp(this.home.x + ox, this.home.x, focus);
    this.pos.y = lerp(this.home.y + oy, this.home.y, focus);
  }

  show() {
    fill(0, 70);
    circle(this.pos.x + 3, this.pos.y, 3);
    fill(0);
    circle(this.pos.x, this.pos.y, 4);
  }
}