// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius * 2
  }

  get area(){
    return Math.PI * (this.radius * this.radius)
  }

  get circumference(){
    return Math.PI * this.diameter
  }

  set diameter(diameter){
    this.radius = diameter / 2
  }

  set area(area){
    this.radius = ((area/Math.PI)/this.radius)
  }

  set circumference(circumference){
    this.radius = ((circumference / Math.PI) / 2)
  }
}
