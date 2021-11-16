var add = (num1, num2) => num1 + num2;
var array = [123, 4, 1, 1, 1];
console.log(add(...array));

var colors = ["orange", "Blue", "White"];

var printColors = (c1, c2, c3, c4) => {
    console.log(c1, c2, c3, c4);
}

printColors(...colors);