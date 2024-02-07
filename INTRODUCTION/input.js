// const prompt = require("prompt-sync")();
// const firstname = prompt("What is your name: ")
// console.log(firstname)

const sum = (a,b)=>{
    let ans =  a + b;
    return ans;
}

const multiplyElementByTwo = (arr)=>{
    let array = []
    for(let element of arr){
       let answer = element*2
        array.push(answer)
    }
    return array;
}

module.exports ={sum,multiplyElementByTwo}