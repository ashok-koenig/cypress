let numbers = [10, 20, 30, 40]
// Add elements at the end of the array
numbers.push(50, 60)

console.log(numbers)

// Remove an eleemnt from end of the array
let removedElement = numbers.pop()

console.log("Removed Element is "+ removedElement)

console.log(numbers)

// Add elements at the begining of the array
numbers.unshift(5)

console.log(numbers)

// Remove an element from the beginin of the array
removedElement = numbers.shift()
console.log("Removed Element is "+ removedElement)

console.log(numbers)

// search an element from the array
let searchIndex = numbers.indexOf(30)

console.log(`The element 30 is at the index ${searchIndex}`)

searchIndex = numbers.indexOf(100)

console.log(`The element 100 is at the index ${searchIndex}`)