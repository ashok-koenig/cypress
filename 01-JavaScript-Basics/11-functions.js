// Creating a function using function keyword
function myFunction(message){
    console.log("This is myFunction")
    console.log("Message: "+ message)
}

// Calling a function
myFunction("Test Message")

// Function with Return statement
function greet(name){
    return "Welcome "+ name
}

let greetMessage = greet("John")
console.log(greetMessage)
console.log(greet("Peter"))

// Expression function
const calculate = function(price, quantity){
    let total = price * quantity;
    // console.log("Total Price: "+ total)
    return total
}

console.log("Total Price: "+ calculate(100, 5))
// calculate(100, 5)

// Arrow Function 
const power = (x, y) => {
    let result = x ** y;
    console.log(`${x} to the power of ${y} is ${result}`)
}

power(10, 5)

// const product = (num1, num2) =>{
//     return num1 * num2
// } 

const product = (num1, num2) => num1 * num2

console.log("Product result is "+ product(10, 40))