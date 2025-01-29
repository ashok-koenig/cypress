let counter = 0;

const counterApp = {
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => {
      counter = 0;
      return counter;
    },
    getValue: () => counter,
  };
  
  module.exports = counterApp;
  