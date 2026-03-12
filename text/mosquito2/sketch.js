let font;
let pts = [];
let word = "MOSQUITO";

async function setup() {
  createCanvas(600, 600);
  pixelDensity(1);

  font = await loadFont("AdobeGothicStd-Bold.otf");
  textFont(font);
  textSize(84);

  let bounds = font.textBounds(word, 0, 0);
  let x = width / 2 - bounds.w / 2 - bounds.x;
  let y = height / 2 + bounds.h * 0.35 - bounds.y;

  let arr = font.textToPoints(word, x, y, {
    sampleFactor: 0.55
  });

  for (let p of arr) {
    pts.push(new Swarm(p.x, p.y));
  }
}

function draw() {
  background(246, 241, 235);
  noStroke();

  for (let p of pts) {
    p.move();
    p.show();
  }
}

class Swarm {
  constructor(x, y) {
    this.home = createVector(x, y);
    this.pos = createVector(x, y);
    this.v = createVector();
    this.seed = random(1000);
  }

  move() {
    let jx = map(noise(this.seed, frameCount * 0.02), 0, 1, -0.8, 0.8);
    let jy = map(noise(this.seed + 100, frameCount * 0.02), 0, 1, -0.8, 0.8);

    this.v.x += jx;
    this.v.y += jy;

    let back = p5.Vector.sub(this.home, this.pos).mult(0.06);
    this.v.add(back);

    this.v.mult(0.82);
    this.v.limit(1.4);
    this.pos.add(this.v);
  }

  show() {
    fill(20, 45);
    circle(this.pos.x + 1.5, this.pos.y + 1.5, 2.5);

    fill(20, 180);
    circle(this.pos.x, this.pos.y, 2.5);
  }
}