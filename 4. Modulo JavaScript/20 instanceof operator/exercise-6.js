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

// Soluzione con instanceof
class AreaCalculator {
  static calculate(figure) {
    if (figure instanceof Square) return figure.side * figure.side;
    if (figure instanceof Rectangle) return figure.width * figure.height;
    if (figure instanceof Circle) return Math.PI * figure.radius * figure.radius;
    return "not a square, a rectangle or a circle";
  }
}


const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate(4));



// Soluzione funzionante senza instanceof, ma con spreco di memoria
// (Soluzione NON funzionante per il triangolo! D: Si ritornerebbe l'area come width*height)
// (Soluzione che darebbe problemi con i volumi dei solidi anche... es. parallelepipedo)
//
// class AreaCalculator {
//   static calculate(figure) {
//
//     let squareArea = figure?.side * figure?.side;
//     let squareRectangle = figure?.width * figure?.height;
//     let squareCircle = Math.PI * figure?.radius * figure?.radius;
//    
//     if (squareArea) return squareArea;
//     if (squareRectangle) return squareRectangle;
//     if (squareCircle) return squareCircle;
//    
//   }
// }