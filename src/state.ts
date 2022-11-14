import {Todos} from "./types";

function getUniqueString() {
    return Math.random().toString(16).slice(2)
}

function getState(): Todos {
    return [
        {
            id: getUniqueString(),
            title: 'Todo #1',
            done: false,
        },
        {
            id: getUniqueString(),
            title: 'Todo #2',
            done: true,
        },
        {
            id: getUniqueString(),
            title: 'Todo #3',
            done: false,
        }
    ]
}

export {
    getState,
}
