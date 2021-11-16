export let add = (num1, num2) => num1 + num2;
export let sub = (num1, num2) => num1 - num2;
export let isPrime = num => {
    if (num == 0 || num == 1)
        return false;

    for (var i = 2; i < parseInt(num / 2); i++)
        if (num % i == 0)
            return false;
    return true;
}