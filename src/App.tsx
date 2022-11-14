import React from 'react';
import styles from './App.module.css';
import {TodoList} from "./components/list/TodoList";
import {Form} from "./components/form/Form";
import {Todos} from "./types";

type AppProps = {
    todos: Todos,
}

function App(props: AppProps) {
  return (
    <div className={styles.app}>
      <Form />
      <TodoList todos={props.todos} />
    </div>
  );
}

export default App;
