const {creditLimitCaculator} = require("./Chapter4Functions")
const input = require("prompt-sync")();

let accountNumber  = input("Enter account number: ");
let begingingBalance = parseInt(input("Enter balance at the Beginging of the month: "));
let itemChargeForTheMonth = parseInt(input("Enter total charge of item for the month : "));
let  creditApplied =  parseInt(input("Enter Crdit charge for the month: ")) 
let creditLimit = parseInt(input("Enter customer credit limit: "))


let balance = creditLimitCaculator(begingingBalance,itemChargeForTheMonth,creditApplied)

console.log(`Account with the account number${accountNumber} new balance is ${balance}`)

if(balance <= creditLimit){
    console.log("credit limit has not be exceeded");
}

if(balance > creditLimit){
    console.log("credit limit exceeded");
}
