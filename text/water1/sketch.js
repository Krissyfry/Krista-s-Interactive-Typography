let t = "water";
let ripples = [];

async function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(72);
}

function draw() {
  background(242, 249, 255, 35);

  if (frameCount % 35 == 0) {
    ripples.push({ r: 0, a: 120 });
  }

  noFill();

  for (let i = ripples.length - 1; i >= 0; i--) {
    stroke(170, 210, 235, ripples[i].a);
    circle(width / 2, height / 2, ripples[i].r);

    ripples[i].r += 4;
    ripples[i].a -= 1.5;

    if (ripples[i].a < 0) {
      ripples.splice(i, 1);
    }
  }

  fill(160, 205, 235);
  noStroke();

  for (let i = 0; i < t.length; i++) {
    let x = width / 2 - (t.length - 1) * 22 + i * 44;
    let d = abs(x - width / 2);
    let y = height / 2 + sin(frameCount * 0.05 - d * 0.08) * 10;

    text(t[i], x, y);
  }
}