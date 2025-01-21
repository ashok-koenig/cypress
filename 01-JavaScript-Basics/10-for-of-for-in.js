const friends = ["John", "Peter", "Smith", "Bob"]
friends.push("July")

for(let name of friends){
    console.log(name)
}

// for(let index=0; index<friends.length; index ++){
//     console.log((index+1)+ " "+friends[index])
// }

// console.log(friends)

// friends = "John Peter" // Not possible to re-assign with string 

// console.log(friends)

// Iterate Object using for-in loop

const course = {
    name: "Testing with Cypress",
    duration: 40,
    price: 23434
}

for(let key in course){
    console.log(`${key} - ${course[key]}`)
}

// console.log(course)

const courses = [
                {name: "JavaScript", duration: 24},
                {name: "Node.js", duration: 32},
                {name: "Cypress", duration: 40},
                ];

for(let course of courses){
    // console.log(course)
    for(let key in course){
        console.log(`${key} - ${course[key]}`)
    }
    console.log("--------")
}