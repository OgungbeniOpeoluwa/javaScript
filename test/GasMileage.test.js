const {returnMilesPerGallon,add,taxCalculator,salesPersonEarning,creditLimitCaculator} = require("../INTRODUCTION/Chapter4Dietel/Chapter4Functions")

test("divide miles per gallon",()=>{
    let miles = 287;
    let gallon = 12.8;
    let result = returnMilesPerGallon(miles,gallon)
    expect(result).toBe(22.421875)

})

test("get Average of three trip miles Per gallon",()=>{
    let miles = 287;
    let gallon = 12.8;
    
    let miles2 = 200;
    let gallon2 = 10.3;
    
    let miles3 = 120;
    let gallon3 = 5

    let allMiles = add([miles,miles2,miles3]);
    let allGallon =add([gallon,gallon2,gallon3]);

    let average = returnMilesPerGallon(allMiles,allGallon);
    expect(average).toBe(22.48148148148148)



})

test("Calculate total tax for each citizen",()=>{
    let citizenIncome = 20000
    let result = taxCalculator(citizenIncome)
    expect(result).toBe(3000)
})

test("calculate sales person earning",()=>{
    let salesPersonWeekSales = 5000
    let commission = salesPersonEarning(salesPersonWeekSales)
    expect(commission).toBe(650)
})

test("Credit Limit Calculator for user",()=>{
    let beginingBalance = 10000;
    let itemCharge = 5000;
    let credit = 4000;
    let result = creditLimitCaculator(beginingBalance,itemCharge,credit);
    expect(result).toBe(11000);
})


