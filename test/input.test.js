const{sum,multiplyElementByTwo}=require("../INTRODUCTION/input")

test("sum a and b",()=>{
    let a = 2;
    let b = 5;
    //given that a and b is = 7
    let result = sum(a,b);
    expect(result).toBe(7)
})
test("multiply element in an array by 2",()=>{
    let array = [2,4,5,6,7]
    const result = multiplyElementByTwo(array);
    expect(result).toEqual([4,8,10,12,14])
})