let word = "shortsighted", sharp, blur;

async function setup() {
  createCanvas(800, 300);

  textAlign(CENTER, CENTER);
  textSize(60);

  sharp = createGraphics(width, height);
  sharp.textAlign(CENTER, CENTER);
  sharp.textSize(60);
  sharp.fill(20);
  sharp.text(word, width / 2, height / 2);

  blur = sharp.get();
  blur.filter(BLUR, 10);
}

function draw() {
  background(245);

  image(blur, 0, 0);

  let r = 100;

  for (let x = 0; x < width; x += 12) {
    for (let y = 0; y < height; y += 12) {

      if (dist(x, y, mouseX, mouseY) < r) {
        copy(sharp, x, y, 12, 12, x, y, 12, 12);
      }

    }
  }
}