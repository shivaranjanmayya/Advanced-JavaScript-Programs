//console.log('UI displayed');

//setTimeout(() => console.log('fetching data....'), 3000);

console.log('UI displayed');

let count = 0;
let abc = () => {
    console.log('fetching data...' + ++count);
}

setInterval(abc, 1000);