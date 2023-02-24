import 'p5';
// add eruda for debugging
import eruda from 'eruda';


// check if vitejs is in dev mode
if (import.meta.env.DEV) {
    eruda.init();
}


// a p5 global mode sketch with a circle that moves around the screen

window.setup = () => {
  createCanvas(400, 400);
}

window.draw = () => {
  background(220);
  circle(mouseX, mouseY, 50);
}