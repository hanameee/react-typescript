interface Shape {
    // abstract method
    getArea(): number;
}

class Circle implements Shape {
    // constructor의 param을 public 으로 선언하면 member field를 별도로 선언해 줄 필요 X
    // 왜냐면 public accessor 는 특정값이 클래스의 코드 밖에서도 조회 가능하다는 것을 의미하기 때문
    constructor(public radius: number) {
        this.radius = radius;
    }
    // [mandatory] method defined in Shape interface
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius); // radius 가 public 이기에 에러 없이 작동
// console.log(rectangle.width); // width || height 가 private 이라면 컴파일 에러 발생
