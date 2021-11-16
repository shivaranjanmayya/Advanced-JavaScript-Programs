import { add, isPrime, sub } from './calc.js';
import Song from './Song.js';
console.log(add(123, 123));
console.log(sub(400, 300));
console.log(isPrime(11));

let song1 = new Song('one Mataram', 1990);
console.log(song1);