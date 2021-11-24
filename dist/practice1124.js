"use strict";
//타입스크립트에선 지정한 타입 외의 타입을 사용하게 되면 오류가 나고, 타입 지정부분은 컴파일 될 때 사라짐
const message = 'Hello, I am cindy';
//연습2 타입 여러개 지정
let count = 0; // number일수도 있고 string일수도 있음
count += 1;
count = '문자넣어도 오류 안난다!';
//연습3 함수에서 타입정의
function sum(x, y) {
    return x + y;
}
console.log(sum(2, 3));
console.log(sum(2, 5));
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Ractangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Ractangle(2, 10)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
