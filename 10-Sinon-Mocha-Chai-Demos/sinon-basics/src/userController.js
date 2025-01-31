// src/userController.js
import { userService } from "./userService.js";

export const userController = {
  getUser: (req, res) => {
    const user = userService.getUser(parseInt(req.params.id));
    res.json(user);
  },
  createUser: (req, res) => {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
  }
};
