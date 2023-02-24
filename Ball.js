export default class Ball {
    constructor(options) {

        const defaults = {
            x: 0,
            y: 0,
            diameter: 100,
            color: 255,
        }

        Object.assign(this, defaults, options)
        this.shown = false

        setTimeout(() => {
            this.shown = true
        }, 1000);
    }

    update() {

        push()
        if (!this.shown) { noFill() }
        else {
            fill(this.color)
        }

        ellipse(this.x, this.y, this.diameter)

        pop()



    }


}

// export const test = "dafjlh"