export default class Ball {
    constructor(options) {

        const defaults = {
            x: 0,
            y: 0,
            diameter: 100,
            color: 255,
        }

        Object.assign(this, defaults, options)
    }

    update() {
        push()

        fill(this.color)
        ellipse(this.x, this.y, this.diameter)

        pop()
    }
}

// export const test = "dafjlh"