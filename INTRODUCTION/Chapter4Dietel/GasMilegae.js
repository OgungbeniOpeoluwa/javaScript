const {returnMilesPerGallon,add} = require("./Chapter4Functions")
const input = require("prompt-sync")();

const userInput = input("Enter number of all trips");
let allMiles = [];
let allGallon = [];

for(let count = 0; count < userInput; count++){
    let miles = input("Enter miles: ")
    let gallon = input("Enter gallon: ")
    console.log(returnMilesPerGallon(miles,gallon))
    allMiles.push(miles)
    allGallon.push(gallon)
}

let totalOfAllMiles = add(allMiles)
let totalOfAllGallon = add(allGallon)

console.log(returnMilesPerGallon(totalOfAllMiles,totalOfAllGallon))

