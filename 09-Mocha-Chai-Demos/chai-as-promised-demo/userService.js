const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ];
  
  const getUsers = async () => users;
  
  const getUserById = async (id) => {
    const user = users.find(user => user.id === id);
    if (!user) {
      return Promise.reject(new Error("User not found"));
    }
    return user;
  };
  
  const createUser = async (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
  };
  
  export default { getUsers, getUserById, createUser };
  