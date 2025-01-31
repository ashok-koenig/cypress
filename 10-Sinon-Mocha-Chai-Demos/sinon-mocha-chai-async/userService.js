// userService.js
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ];
  
  const getUsers = async () => users;
  
  const createUser = async (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
  };
  
  export default { getUsers, createUser };
  