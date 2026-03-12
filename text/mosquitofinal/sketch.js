let word = "MOSQUITO", z = 0, dir = 1, jitter = [];

async function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < word.length; i++) {
    jitter[i] = random(1000);
  }
}

function draw() {
  background(245, 242, 238, 40);

  z += dir * 0.012;
  if (z > 1 || z < 0) dir *= -1;

  let s = lerp(28, 120, z);
  let gap = lerp(38, 12, z);
  let start = width / 2 - (word.length - 1) * gap / 2;

  fill(10, 180);
  noStroke();

  for (let i = 0; i < word.length; i++) {
    let x = start + i * gap + map(noise(jitter[i], frameCount * 0.05), 0, 1, -18, 18);
    let y = height / 2 + sin(frameCount * 0.3 + i) * lerp(4, 22, z);

    push();
    translate(x, y);
    rotate(map(noise(jitter[i] + 50, frameCount * 0.07), 0, 1, -0.5, 0.5));
    textSize(s + random(-8, 8));
    text(word[i], 0, 0);
    pop();
  }
}