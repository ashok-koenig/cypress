let emptyObject = {} // empty object

let person = { firstName: "John", lastName: "Peter", age: 25, isStudent: true }

console.log(person)

// access a value in object
console.log(person.firstName)

console.log(person['lastName'])

// modify a value in object

person.age = 30
person['isStudent'] = false

console.log(person)

//Add a new key-value
person.email = "john@email.com"

console.log(person)