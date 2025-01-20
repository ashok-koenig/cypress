var globalVariable = "This is global variable value";
console.log(globalVariable)
globalVariable = "Modified global variable value"
console.log(globalVariable)
// Simple block
{
  let blockVariable = "This is block variable value"
  console.log(blockVariable)
  blockVariable = "Modified block variable value"
  console.log(blockVariable)

  var globalVariableInBlock = "Another global variable inside block"
  console.log(globalVariableInBlock)
}

// console.log(blockVariable) // not possible to access outside the block
console.log(globalVariableInBlock)
