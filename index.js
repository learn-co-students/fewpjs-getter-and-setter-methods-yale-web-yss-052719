// Add your Circle class here
class Circle {

  constructor(radius) {
    this.radius = radius

  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set diameter(n) {
    this.radius = n / 2;
  }

  set circumference(n) {
    this.radius = n / (2 * Math.PI)
  }




}
