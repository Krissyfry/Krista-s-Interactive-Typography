let font;

let y = 0;
let speed = 3;
let groundY = 220;

let broken = false;
let letters = [];

async function setup() {
  createCanvas(600, 300);

  font = await loadFont("AcuminVariableConcept.otf");
  textFont(font);

  textAlign(CENTER, CENTER);
  textSize(60);
}

function draw() {
  background(255);

  noStroke();
  fill(100);
  rect(0, groundY, width, height - groundY);

  if (!font) return;

  if (!broken) {
    if (y < groundY) {
      y += speed;
    } else {
      y = groundY;
      broken = true;
      makeLetters();
    }

    fill(160, 210, 255);
    text("water", width / 2, y);

  } else {
    for (let l of letters) {
      l.vy += 0.3;
      l.y += l.vy;
      l.x += l.vx;

      if (l.y > groundY) {
        l.y = groundY;
        l.vy *= -0.8;
        l.vx *= 0.01;
        if (abs(l.vy) < 0.5) l.vy = 0;
      }

      fill(160, 210, 255);
      text(l.ch, l.x, l.y);
    }
  }
}

function makeLetters() {
  letters = [];

  let chars = "water".split("");
  let spacing = 45;

  for (let i = 0; i < chars.length; i++) {
    letters.push({
      ch: chars[i],
      x: width / 2 + (i - 2) * spacing,
      y: groundY,
      vx: random(-2, 2),
      vy: random(-10, -4),
    });
  }
}