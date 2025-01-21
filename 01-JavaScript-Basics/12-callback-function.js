function greet(name, callback){
    console.log(`Hello, ${name}!`)
    callback()
}

function sayGoodbye(){
    console.log("Goodbye!")
}

greet('John', sayGoodbye)

// Passing function as anonymous function - express function 

greet('Peter', function(){ console.log("Goodbye!") })

// Passing function as arrow function

greet('Smith', ()=>{ console.log("Goodbye!") })