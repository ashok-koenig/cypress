const mathUtils = {
    add: (n1, n2) => n1 + n2,
    subtract: (n1, n2)=> n1-n2,
    multiply: (n1, n2)=> n1 * n2,
    divide: (n1, n2)=> {
        if( n2 == 0) throw new Error('Cannot divide by zero')
            return n1/n2
    }
}

const datautils = {
    getUser: () => ({id: 1, name: 'John', role: 'admin'}),
    getNumbers: () => [1,2,3,4,5]
}

module.exports = {mathUtils, datautils}