let pts = [], pg;

async function setup() {
  createCanvas(600, 600);

  pg = createGraphics(width, height);
  pg.pixelDensity(1);
  pg.background(255);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(100);
  pg.fill(0);
  pg.text("water", width / 2, height / 2);
  pg.loadPixels();

  for (let x = 0; x < width; x += 6) {
    for (let y = 0; y < height; y += 6) {
      let i = 4 * (x + y * width);
      if (pg.pixels[i] < 128) {
        pts.push({ x, y, ox: x, oy: y, a: 255, t: random(1000) });
      }
    }
  }
}

function draw() {
  background(238, 246, 255, 35);
  noStroke();

  for (let p of pts) {
    let k = max(0, (frameCount - 40) / 120);
    let ang = noise(p.ox * 0.01, p.oy * 0.01, frameCount * 0.01 + p.t) * TWO_PI * 2;

    p.x = lerp(p.ox, p.ox + cos(ang) * 80 * k, k);
    p.y = lerp(p.oy, p.oy + sin(ang) * 50 * k - frameCount * 0.15 * k, k);
    p.a = 255 - 180 * k;

    fill(185, 210, 225, p.a);
    circle(p.x, p.y, 5 + 4 * k);
  }
}