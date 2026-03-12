let font, pts = [];

async function setup() {
  createCanvas(600, 600);
  pixelDensity(1);

  font = await loadFont("AdobeGothicStd-Bold.otf");
  textFont(font);
  textSize(120);

  let word = "WATER";

  let bounds = font.textBounds(word, 0, 0);
  let x = width / 2 - bounds.w / 2 - bounds.x;
  let y = height / 2 + bounds.h * 0.35 - bounds.y;

  let arr = font.textToPoints(word, x, y, {
    sampleFactor: 0.25
  });

  for (let p of arr) {
    pts.push(new Dot(p.x, p.y));
  }
}

function draw() {
  background(236, 245, 252);
  noStroke();

  for (let p of pts) {
    p.move();
    p.show();
  }
}

class Dot {
  constructor(x, y) {
    this.home = createVector(x, y);
    this.pos = createVector(x, y);
  }

  move() {
    let d = dist(mouseX, mouseY, this.home.x, this.home.y);
    let a = atan2(this.home.y - mouseY, this.home.x - mouseX);
    let wave = sin(frameCount * 0.08 - d * 0.09) * 16;
    let force = map(d, 0, 140, 1, 0, true);

    this.pos.x = lerp(this.pos.x, this.home.x + cos(a) * wave * force, 0.18);
    this.pos.y = lerp(this.pos.y, this.home.y + sin(a) * wave * force, 0.18);
  }

  show() {
    let d = dist(mouseX, mouseY, this.home.x, this.home.y);
    let s = map(d, 0, 140, 5, 3, true);
    fill(130, 190, 235, 190);
    circle(this.pos.x, this.pos.y, s);
  }
}