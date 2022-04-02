import { useState } from "react";
import { TaskList } from "../TaskList";
import styles from "./styles.module.scss";

let id = 1;
let idx = 0;

export function InputTask({ toDoCallback }) {
  let [task, setTask] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    let inputTitle = event.target[0].value;
    let tempTask = { id: id, title: inputTitle, index: idx, checked: false };
    setTask(tempTask);
    id++;
    idx++;
    toDoCallback(tempTask);
  }

  return (
    <form className={styles.container} id="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskInput"
        placeholder="Create a new todo..."
        className={styles.textInput}
      />
      <button className={styles.button} form="inputForm" type="submit">
        &#43;
      </button>
    </form>
  );
}
