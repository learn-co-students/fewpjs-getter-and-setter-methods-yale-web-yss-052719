// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        let d = 2 * this.radius;
        return d;
    }

    set diameter(num) {
        this.radius = num/2;
    } 

    get circumference() {
        return this.diameter * Math.PI;
    }

    set circumference(num) {
        this.diameter = num / Math.PI
    }

    get area() {
        return Math.PI * (this.radius) ** 2;
    }


}