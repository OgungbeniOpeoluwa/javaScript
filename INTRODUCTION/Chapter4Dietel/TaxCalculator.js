const {taxCalculator} = require("./Chapter4Functions")
const input = require("prompt-sync")();

let stop = parseInt(input("Enter -1 to stop, press 0 to continue:"))

while(stop != -1){
    let name = input("Enter your name: ")
    let income = input("Enter your income for the year: ")
    let result = taxCalculator(income)
    console.log(`hello ${name} your total tax is ${result}`)
   
    stop = parseInt(input("Enter -1 to stop, press 0 to continue: "))

}


