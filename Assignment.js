// 1. Write a arrow function which accepts three numbers as arguments and returns addition of three numbers.

let add = (num1, num2, num3) => num1 + num2 + num3;

console.log('The addition of three numbers are :' + add(12, 15, 17));

console.log('-------------------------------------------------------------------------');

// 2. Write a arrow function takes time and distance as input and retruns speed.

let speed = (time, distance) => distance / time;

console.log('The speed is : ' + speed(200, 600));

console.log('-------------------------------------------------------------------------');

// 3. Write a arrow function which accepts radius as input and return area of a circle as output.

let areaOfCircle = (radius) => radius * radius * 3.142;

console.log('The area of a cirlce is :' + areaOfCircle(123, 123));

console.log('-------------------------------------------------------------------------');

// 4. Write a arrow function which accepts a number as input and returns factorial of that number.

let factorial = num => {
    let fact = 1;
    if (num == 0 || num == 1)
        return 1;

    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}

console.log('Factorial of 7 is ' + factorial(7));

console.log('-------------------------------------------------------------------------');

// 5. Write a arrow function which takes an integer as input and returns true if it is even false if it's not.

let isEven = num => num % 2 == 0;

console.log(isEven(123));
console.log(isEven(10));

console.log('-------------------------------------------------------------------------');

// 6. Write a arrow function which takes an integer as input and returns true if it is odd false if it's not.

let isOdd = num => num % 2 != 0;

console.log(isOdd(123));
console.log(isOdd(10));

console.log('-------------------------------------------------------------------------');

// 7. Write a arrow function which takes an integer as input and returns true if it is prime false if it's not.

let isPrime = num => {
    if (num == 1 || num == 0)
        return false;

    for (var i = 2; i < num; i++) {

        if (num % i == 0)
            return false;
    }
    return true;

}

console.log(isPrime(2));
console.log(isPrime(55));

console.log('-------------------------------------------------------------------------');

// 8. Write a arrow function which takes an integer as input and returns true if it is palindrome false if it is not.

let isPalindrome = num => {

    let rev = 0;
    for (let i = num; i > 0;) {
        rem = i % 10;
        rev = rev * 10 + rem;
        i = parseInt(i / 10);
    }

    return rev == num;

}

console.log(isPalindrome(121));
console.log(isPalindrome(4545));
console.log(isPalindrome(4554));

console.log('-------------------------------------------------------------------------');

// 9. Write a arrow function which takes an integer as input and returns a Fibonacci series of that size and store all the numbers in a string and return the string itself.

let Fibonacci = num => {

    let f1 = "0", f2 = "1", f3, string = "";
    for (let i = 1; i <= num; i++) {
        string += f1 + '\t';
        f3 = parseInt(f1 + f2);
        f1 = parseInt(f2);
        f2 = parseInt(f3);
    }
    return string;

}

console.log('Fibonacci series are : ' + Fibonacci(11));

console.log('-------------------------------------------------------------------------');

// 10. Write a arrow function which takes an integer as input and returns true if it is divisible by 6 false if it's not.

let isdivisible = num => num % 6 == 0;

console.log(isdivisible(16));
console.log(isdivisible(36));

console.log('-------------------------------------------------------------------------');

// 11. A arrow function accepts the time in seconds and returns the time in hours.

let time = seconds => seconds / 3600;

console.log('hour = ' + time(3600));

console.log('-------------------------------------------------------------------------');

// 12. A arrow function that counts the number of Digits in an Integer.

let countDigits = num => {
    let count = 0;
    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}

console.log(countDigits(100));
console.log(countDigits(12345));

console.log('-------------------------------------------------------------------------');

// 13. Write a arrow function that accepts an integer and returns the digits repeated twice.

let makeTwice = num => {
    let count = countDigits(num);

    switch (count) {
        case 1: return num * 10 + num;
        case 2: return num * 100 + num;
        case 3: return num * 1000 + num;
        case 4: return num * 10000 + num;
        case 5: return num * 100000 + num;
    }

}

console.log(makeTwice(123));
console.log(makeTwice(1567));

console.log('-------------------------------------------------------------------------');

// 14. Given a 4 digit number as input, find the value of its hundredth digit using arrow function.

let hundreds_place_value = num => hun = parseInt(num / 100) % 10;

console.log(hundreds_place_value(1234));
console.log(hundreds_place_value(8943));

console.log('-------------------------------------------------------------------------');

/* 15. Calculate RequiredRunRate: A team is chasing the target set in a one-day international match. The objective is to compute the required run rate. The following have been provided as input:
target,maxOvers, currentScore, oversBowled using arrow function.*/

let requiredrunRate = (target, maxOvers, currentScore, oversBowled) => (target - currentScore) / (maxOvers - oversBowled);

console.log('The required run rate for one-day international match is : ' + requiredrunRate(200, 20, 140, 16.4));

console.log('-------------------------------------------------------------------------');

// 16. MakeDecimal: Given 3 digits a,b and c as input, return a double of the form a.bc using arrow function.

let makeDecimal = (num1, num2, num3) => ((num1 * 100) + (num2 * 10) + num3) / 100;

console.log(makeDecimal(1, 2, 3));

console.log('-------------------------------------------------------------------------');

// 17. Sum2Digit: Given a 2 digit number as input, compute the sum of its digits using arrow function. Assume that the number has 2 digits.

let sum2Digit = num => {
    let unit_place, tens_place;
    if (num <= 99 && num > 9)
        unit_place = num % 10;
    tens_place = parseInt(num / 10) % 10;
    return unit_place + tens_place;
}

console.log('Sum of 2 digits is : ' + sum2Digit(34));

console.log('-------------------------------------------------------------------------');

// 18. AndBooleans: Given three booleans as input, return the AND of the all three booleans using arrow function.

let andBooleans = (boolean1, boolean2, boolean3) => boolean1 && boolean2 && boolean3;

console.log(andBooleans(true, false, false));
console.log(andBooleans(true, false, true));
console.log(andBooleans(true, true, true));

console.log('-------------------------------------------------------------------------');

/* 19. LargerThanOne: Given three numbers as input, num1,num2 and num3, return true if num1 is greater than atleast one of num2 and num3 using arrow function. 
Do not use if statement to solve this problem.*/

let largerThanOne = (num1, num2, num3) => num1 > num2 || num1 > num3;

console.log(largerThanOne(30, 20, 10));

console.log('-------------------------------------------------------------------------');

/* 20. NumberInAscendingOrder: Given 3 numbers- num1,num2 and num3 as input, return true if they are ascending order using arrow function. 
Important- Do not use if statement in solution.*/

let numberInAscendingOrder = (num1, num2, num3) => num1 < num2 && num2 < num3;

console.log(numberInAscendingOrder(10, 20, 30));

console.log('-------------------------------------------------------------------------');

// 21. SumOf4Digits: Given a number as input, compute the sum of its last 4 digits. Assume that the number has at least 4 digits using arrow function.

let sumOf4Digits = num => {
    let unit_place, tens_place, hundreds_place, thousands_place;
    if (num >= 1000)
        unit_place = num % 10;
    tens_place = parseInt(num / 10) % 10;
    hundreds_place = parseInt(num / 100) % 10;
    thousands_place = parseInt(num / 1000) % 10;
    return parseInt(unit_place + tens_place + hundreds_place + thousands_place);
}

console.log('Sum of 4 digits are : ' + sumOf4Digits(3434));

console.log('-------------------------------------------------------------------------');

/* 22. AreaOfSquare: You have been given 4 inputs x1,y1,x2 and y2. 
The points(x1,y1) and (x2,y2) represent the end points of the diagonal of a square using arrow function. Return the area of the square.*/

let areaOfSquare = (x1, y1, x2, y2) => ((Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)) ** 2) / 2;

console.log('Area of a square is :' + areaOfSquare(2, 4, 8, 10));

console.log('-------------------------------------------------------------------------');

// 23. AddDigitNumbers : Given three digits as input, create a 4 digit number out of each input in which all the digits are the same and then add all the 3 numbers and return the value using arrow function.

let addDigitNumbers = (digit1, digit2, digit3) => {

    let num1 = 0, num2 = 0, num3 = 0;
    for (let i = 10; i <= 1000; i = i * 10) {
        num1 = num1 + digit1 * i; //0+1*10= 10 ; 10+1*100=110; 110+1*1000=1110
        num2 = num2 + digit2 * i;
        num3 = num3 + digit3 * i;

    }
    return (num1 + digit1) + (num2 + digit2) + (num3 + digit3);
}

console.log(addDigitNumbers(1, 2, 3));

console.log('-------------------------------------------------------------------------');

// 24. Multiple37 : Given a number n, return true if it is divisble by either 3 or 7 using arrow function.

let multiple3Or7 = num => num % 3 == 0 || num % 7 == 0 ? true : false;

console.log(multiple3Or7(37));
console.log(multiple3Or7(21));
console.log(multiple3Or7(54));

console.log('-------------------------------------------------------------------------');

//25. LargestOfThree: Given three numbers as input return the largest number.

let largestOfThree = (num1, num2, num3) => (num1 > num2 && num1 > num3) ? num1 : num2 > num3 ? num2 : num3;

console.log('The largest number is : ' + largestOfThree(31, 40, 30));



