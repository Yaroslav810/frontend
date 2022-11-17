import styles from "./Form.module.css"
import {dispatch} from "../../state";
import {useState} from "react";
import {addTodo} from "../../actions/todos";

function Form() {
    const [state, setState] = useState('')
    return (
        <div className={styles.form}>
            <input
                value={state}
                onChange={event => {
                    setState(event.target.value)
                }}
                className={styles.input}
                type="text"
            />
            <button
                className={styles.button}
                onClick={() => {
                    dispatch(addTodo, state)
                    setState('')
                }}
            >Добавить!</button>
        </div>
    )
}

export {
    Form,
}
