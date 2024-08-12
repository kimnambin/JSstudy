const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

console.log(
    `${Math.ceil((A + B) % C)}\n${Math.ceil(((A % C) + (B % C)) % C)}\n${Math.ceil((A * B) % C)}\n${Math.ceil(
        ((A % C) * (B % C)) % C
    )}`
);
