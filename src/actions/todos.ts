import {Todos} from "../types";
import {changeDoneTodo, createTodo} from "./todo";

function addTodo(todos: Todos, title: string): Todos {
    return [
        ...todos,
        createTodo(title),
    ]
}

function deleteTodo(todos: Todos, id: string): Todos {
    return todos.filter(todo => todo.id !== id)
}

function changeDone(todos: Todos, id: string): Todos {
    return todos.map(todo => {
        if (todo.id === id) {
            return changeDoneTodo(todo)
        }
        return todo
    })
}

export {
    addTodo,
    deleteTodo,
    changeDone,
}
