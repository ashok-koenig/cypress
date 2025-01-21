// Rest parameters - used to received infinite number of paramters 
const sumUp = (initialValue, ...values) => {
    // console.log(values)
    let result =initialValue;
    for(let value of values){
        result += value
    }
    console.log("SumUp result is "+ result)
}

sumUp(12)
sumUp(12, 34)
sumUp(45, 45, 6, 7, 88)