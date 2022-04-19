import { useState } from "react";
import styles from "./styles.module.scss";

interface taskData {
  id: number;
  title: string;
  index: number;
  checked: boolean;
}

interface taskProps {
  toDoCallback: (task: taskData) => void;
  storedTasks: taskData[];
}

export function InputTask({ toDoCallback, storedTasks }: taskProps) {
  let [task, setTask] = useState({});
  let [title, setTitle] = useState("");

  const maxId = (tasks: taskData[]) => Math.max(...tasks.map((o) => o.id));

  let id = storedTasks.length > 0 ? maxId(storedTasks) + 1 : 1;
  let idx = storedTasks ? storedTasks.length : 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let tempTask = { id: id, title: title, index: idx, checked: false };
    setTask(tempTask);
    toDoCallback(tempTask);
    setTitle("");
  }

  return (
    <form className={styles.container} id="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskInput"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.textInput}
      />
      <button className={styles.button} form="inputForm" type="submit">
        &#43;
      </button>
    </form>
  );
}
