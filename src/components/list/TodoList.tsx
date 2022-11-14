import {Todos} from "../../types";
import {TodoItem} from "./item/TodoItem";
import styles from "./TodoList.module.css"

type TodoListProps = {
    todos: Todos,
}

function TodoList(props: TodoListProps) {
    return (
        <ul className={styles.list}>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    )
}

export {
    TodoList,
}