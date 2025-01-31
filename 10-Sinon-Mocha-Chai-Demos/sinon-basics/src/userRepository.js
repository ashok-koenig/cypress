// src/userRepository.js
export const userRepository = {
    getUserById: (id) => {
      return { id, name: "Alice" }; // Simulated database response
    },
    saveUser: (user) => {
      return { id: 1, ...user }; // Simulated save operation
    }
  };
  