import {Todo} from "../../../types"
import styles from "./TodoItem.module.css"

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
                onChange={() => console.log(`toggle ${id}`)}
            />
            {title}
            <button
                onClick={() => console.log(`deleted ${id}`)}
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
