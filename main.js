import 'normalize.css'
import 'p5'
import Ball from './Ball.js'

let ballInstances = []

window.setup = () => {

  createCanvas(windowWidth, windowHeight)

  ballInstances.push(new Ball({
    color: 'yellow'
  }))
  ballInstances.push(new Ball({ x: 100, y: 250, diameter: 30, color: 'yellow' }))
}

window.draw = () => {
  background('red')

  ballInstances.forEach((b, i) => {
    b.update()
  })
}
