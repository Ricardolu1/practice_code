class Point {

  constructor(x, y) {
    
    this.x = x;
    this.y = y;
    console.log('this1', typeof this)
  }

  toString() {
    console.log('this2',typeof this)
    return '(' + this.x + ', ' + this.y + ')';
  }

}

var point = new Point(2, 3);
console.log(point)
point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true