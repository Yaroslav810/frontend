import {Todo} from "../types";
import {generateId} from "./id";

function createTodo(title: string): Todo {
    return {
        id: generateId(),
        title,
        done: false,
    }
}

function changeDoneTodo(todo: Todo): Todo {
    return {
        ...todo,
        done: !todo.done,
    }
}

export {
    createTodo,
    changeDoneTodo,
}
