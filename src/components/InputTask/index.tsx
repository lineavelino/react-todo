import { useState } from "react";
import { TaskList } from "../TaskList";
import styles from "./styles.module.scss";

export function InputTask({ toDoCallback, storedTasks }) {
  let [task, setTask] = useState({});

  const maxId = (storedTasks) => Math.max(...storedTasks.map((o) => o.id));

  let id = storedTasks ? maxId(storedTasks) + 1 : 1;
  let idx = storedTasks ? storedTasks.length : 0;

  function handleSubmit(event) {
    event.preventDefault();

    let inputTitle = event.target[0].value;
    let tempTask = { id: id, title: inputTitle, index: idx, checked: false };
    setTask(tempTask);
    toDoCallback(tempTask);
    event.target[0].value = "";
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
