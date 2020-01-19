interface Shape {
    // abstract method
    getArea(): number;
}

class Circle implements Shape {
    // member field
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    // [mandatory] method defined in Shape interface
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
});
