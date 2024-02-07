const input = require("prompt-sync")();
let stop = 0;
let max = 0;
let counter = 1;
while(stop != 10){
    let number = input(`Enter unit ${counter}: `)
    if(number > max){
        max = number;
    }
    counter+=1;
    stop++;
}
console.log(max)