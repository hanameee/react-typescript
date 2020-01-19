"use strict";
var Circle = /** @class */ (function () {
    // constructor의 param을 public 으로 선언하면 member field를 별도로 선언해 줄 필요 X
    // 왜냐면 public accessor 는 특정값이 클래스의 코드 밖에서도 조회 가능하다는 것을 의미하기 때문
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // [mandatory] method defined in Shape interface
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius); // radius 가 public 이기에 에러 없이 작동
// console.log(rectangle.width); // width || height 가 private 이라면 컴파일 에러 발생
