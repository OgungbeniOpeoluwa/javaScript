const returnMilesPerGallon = (miles,gallon) =>{
    let answer = miles/gallon
    return answer;
}

const add =(array)=>{
    let result = 0;
    for (const value of array) {
        result+=parseInt(value);
    }
    return result
}

const taxCalculator =(income)=>{
    let result = 0;
    if(income <= 30000){
        let tax = 15 / 100;
         result =  income * tax;
         return result;
    }
    let tax = 20/100
    result = income * tax;
    return result;

}

const salesPersonEarning =(weeklySales)=>{
    let result= 200 +((9/100) * weeklySales)
    return result; 
}
const creditLimitCaculator = (begingingBalance,charge,credit)=>{
    let result = begingingBalance + charge - credit;
    return result;

}


module.exports ={returnMilesPerGallon,add,taxCalculator,salesPersonEarning,creditLimitCaculator}

