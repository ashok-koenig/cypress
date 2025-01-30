// userService.js
const users = [
    { id: 1, name: "Alice", email: "alice@example.com", createdAt: new Date() },
    { id: 2, name: "Bob", email: "bob@example.com", createdAt: new Date() }
  ];
  
  const getUsers = async () => users;
  
  const createUser = async (name, email) => {
    const newUser = { id: users.length + 1, name, email, createdAt: new Date() };
    users.push(newUser);
    return newUser;
  };
  
  export default { getUsers, createUser };
  