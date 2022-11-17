import {Todo} from "../../../types"
import styles from "./TodoItem.module.css"
import {dispatch} from "../../../state";
import {changeDone, deleteTodo} from "../../../actions/todos";

type TodoItemProps = {
    todo: Todo,
}

function TodoItem(props: TodoItemProps) {
    const {id, title, done} = props.todo

    return (
        <li className={styles.item}>
            <input
                type="checkbox"
                checked={done}
                onChange={() => dispatch(changeDone, id)}
            />
            <span className={done ? styles.done : ''}>{title}</span>
            <button
                onClick={() => dispatch(deleteTodo, id)}
                className={styles.button}
            >
                Удалить
            </button>
        </li>
    )
}

export {
    TodoItem,
}
