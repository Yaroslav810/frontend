import {Todos} from "./types";

const KEY = 'todos'

let todos: Todos = getTodosFromStorage()
let changeTodosHandler: Function = () => {}

function getState(): Todos {
    return todos
}

function setState(newTodos: Todos) {
    todos = newTodos
    changeTodosHandler()
    setTodosToStorage()
}

function dispatch(modifyFn: Function, payload: Object) {
    setState(modifyFn(todos, payload))
}

function addChangeTodosHandler(handler: Function) {
    changeTodosHandler = handler
}

function setTodosToStorage() {
    window.localStorage.setItem(KEY, JSON.stringify(todos))
}

function getTodosFromStorage(): Todos {
    const todos = window.localStorage.getItem(KEY)
    return todos ? JSON.parse(todos) : []
}

export {
    getState,
    dispatch,
    addChangeTodosHandler,
}
