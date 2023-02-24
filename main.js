import 'p5';
// a p5 global mode sketch with a circle that moves around the screen

window.setup = () => {
  createCanvas(400, 400);
}

window.draw = () => {
  background(220);
  circle(mouseX, mouseY, 50);
}