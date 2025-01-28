const assert = require('assert')
const taskManager = require('../taskManager')

describe('Task Manager', ()=>{
    describe('Synchronous Operations', ()=>{
        it('should add a new task', ()=>{
            taskManager.resetTasks()
            const task = taskManager.addTask('Learn Mocha');
            assert.strictEqual(task.title, 'Learn Mocha')
            assert.strictEqual(task.completed, false)
        })
       
        it('should retrive all tasks', ()=>{
            taskManager.resetTasks()
            taskManager.addTask('Task 1')
            taskManager.addTask('Task 2')
            const tasks = taskManager.getTasks()
            assert.strictEqual(tasks.length, 2)
        })

        it('should complete a task', ()=>{
            taskManager.resetTasks();
            taskManager.addTask('Task to complete')
            const completedTask = taskManager.completeTask(1)
            assert.strictEqual(completedTask.completed, true)
        })

        it('should throw an error if task is not found', ()=>{
            taskManager.resetTasks();
            try{
                taskManager.completeTask(100)
            } catch(error){
                assert.strictEqual(error.message, 'Task not found')
            }
        })
    })

    describe('Asynchronous Operations', ()=>{
        it('should retrieve tasks asynchronously', async ()=>{
            taskManager.resetTasks()
            taskManager.addTask('Task 1')
            taskManager.addTask('Task 2')
            const tasks = await taskManager.getTasksAsync()
            assert.strictEqual(tasks.length, 2)
            assert.deepStrictEqual(tasks[0], {id: 1, title: 'Task 1', completed: false})
        })
    })
})