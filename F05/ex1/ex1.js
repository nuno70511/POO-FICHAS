
/**
 * This is a class to model a rectangle
 */
class Rectangle {
    constructor(width = 2, height = 1) {
        this.width = width;
        this.height = height;
        this._color = "#FFF";
    }

    // Property width
    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    // Property height
    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    // Property color
    get color() {
        return this._color;
    }

    /**
     * @returns will return the area of the rectangle
     */
    getArea() {
        return this._width * this._height;
    }

    /**
     * @returns will return the perimeter of the rectangle
     */
    getPerimeter() {
        return this._width * 2 + this._height * 2;
    }
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle._width);
console.log(myRectangle._height);
console.log(myRectangle._color);
console.log(myRectangle.getArea());
console.log(myRectangle.getPerimeter());

const myRectangle2 = new Rectangle();
console.log(myRectangle2._width);
console.log(myRectangle2._height);
console.log(myRectangle2._color);
console.log(myRectangle2.getArea());
console.log(myRectangle2.getPerimeter());