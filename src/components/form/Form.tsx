import styles from "./Form.module.css"

function Form() {
    return (
        <div className={styles.form}>
            <input className={styles.input} type="text"/>
            <button className={styles.button}>Добавить!</button>
        </div>
    )
}

export {
    Form,
}
