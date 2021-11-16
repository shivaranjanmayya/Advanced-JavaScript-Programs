// ... will store all remaining values
//spread operator

const [a, b, ...restOfTheValues] = [1, 2, 3, 'x', 'y', 100];

console.log(a);
console.log(b);
console.log(restOfTheValues);
console.log(restOfTheValues[2]);