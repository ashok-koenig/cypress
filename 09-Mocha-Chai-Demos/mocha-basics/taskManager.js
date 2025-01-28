let tasks = [];

const taskManager = {
  addTask: (title) => {
    const task = { id: tasks.length + 1, title, completed: false };
    tasks.push(task);
    return task;
  },
  getTasks: () => tasks,
  completeTask: (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.completed = true;
    return task;
  },
  resetTasks: () => {
    tasks = [];
  },
  getTasksAsync: () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(tasks), 100);
    }),
};

module.exports = taskManager;
