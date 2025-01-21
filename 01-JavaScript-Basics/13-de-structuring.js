const point = [100, 200, 300]

// const x = point[0]
// const y = point[1]

// De-structuring with array
const [x, y , z] = point

console.log(x, y, z)

const person = { firstName: "John", lastName: "Peter", age: 25, isStudent: true }

// De-Structuring with object
const {lastName,firstName} = person

console.log(firstName, lastName)

// Renaming while de-structuring with object
const {lastName:lname,firstName:fname} = person

console.log(fname, lname)