const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = line;
    console.log(input)
}).on('close',function(){
    str = input[0];
});

