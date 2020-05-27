function setup() {
  createCanvas(600, 400);
  background(0);
  let button = createButton("press");
  button.mousePressed(changeBackground);

  function changeBackground() {
    background(random(255));
  }
}
