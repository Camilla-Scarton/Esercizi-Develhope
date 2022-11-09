class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {

    let squareArea = figure?.side * figure?.side;
    let squareRectangle = figure?.width * figure?.height;
    let squareCircle = Math.PI * figure?.radius * figure?.radius;
    
    if (squareArea) {
      return squareArea;
    } else if (squareRectangle) {
      return squareRectangle;
    } else if (squareCircle) {
      return squareCircle;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));