// src/userService.js
import { userRepository } from "./userRepository.js";

export const userService = {
  getUser: (id) => {
    return userRepository.getUserById(id);
  },
  createUser: (user) => {
    return userRepository.saveUser(user);
  }
};
