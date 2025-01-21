function calculate(price, quantity=1, discount=0){
    return (price * quantity) - discount;
}

console.log("Total Price: "+ calculate(100, 5, 10))
console.log("Total Price: "+ calculate(100, 5))
console.log("Total Price: "+ calculate(100))