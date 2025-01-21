const array1 = [1, 2, 3]

// Copy array1 into array2
// const array2 = array1

// const array2=[]
// for (const element of array1) {
//     array2.push(element)
// }

// Spread operator to copy array into another array
const array2 = [...array1]

array1[0]=10

console.log(array1)
console.log(array2)
// Concatenating arrays
const array3 = [...array1, ...array2]
console.log(array3)

const person = {name: "John", age: 15}

const student = {grade: 9, mark: 89}

const studentDetail = {...person, ...student}

console.log(studentDetail)