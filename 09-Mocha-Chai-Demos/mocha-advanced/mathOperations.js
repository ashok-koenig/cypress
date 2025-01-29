const mathOperations = {
    add: (a, b) => a + b,
  
    subtract: (a, b) => a - b,
  
    multiply: (a, b) => a * b,
  
    divide: (a, b) => {
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    },
  
    async slowAdd(a, b, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(a + b);
        }, delay);
      });
    },
  
    async flakyOperation() {
      const success = Math.random() > 0.5; // 50% chance of success
      if (!success) throw new Error('Flaky operation failed');
      return 'Success!';
    },
  };
  
  module.exports = mathOperations;
  