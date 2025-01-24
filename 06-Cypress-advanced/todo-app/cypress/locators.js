export const locators = {
    "main":{
        addItemInput: "[data-testid='new-todo']",
        "filter":{
            all: '[data-testid="filter-all"]',
            active: '[data-testid="filter-active"]',
            completed: '[data-testid="filter-completed"]'
        }
    },
    "item":{
        list:'[data-testid="todo-item"]',
        editInput:'[data-testid="todo-input"]',
        toggle: '[data-testid="todo-toggle"]',
        title: '[data-testid="todo-item-title"]',
        editButton: '[data-testid="edit"]',
        deleteButton: '[data-testid="delete"]'
    }
}