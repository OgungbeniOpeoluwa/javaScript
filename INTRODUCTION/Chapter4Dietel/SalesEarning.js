const {salesPersonEarning} = require("./Chapter4Functions")
const input = require("prompt-sync")();

let overallStop = parseInt(input("Enter -1 to stop or press 0 to continue: "))

while(overallStop != -1){
    let itemSold =input("How many item did you sell: ")
    let result = 0;

    for(let count = 0; count < itemSold; count++){
        let value = parseInt(input("how much is the value per one: "))
        result += value;
    }
    
    let name =input("what is your name: ")
    let  returns = salesPersonEarning(result);
    console.log(`hello ${name} ,your sales earning for this weeek is ${returns}`);
    
    overallStop = parseInt(input("Enter -1 to stop or press 0 to continue: "))
}
