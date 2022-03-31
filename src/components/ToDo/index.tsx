import { useCallback, useState } from "react";
import { InputTask } from "../InputTask";
import { TaskList } from "../TaskList";
import styles from "./styles.module.scss";

export function ToDo() {
  let [tasks, setTasks] = useState([]);

  let toDoCallback = useCallback(
    (task) => {
      setTasks([...tasks, task]);
    },
    [tasks]
  );

  return (
    <>
      <InputTask toDoCallback={toDoCallback} />
      <TaskList tasks={tasks} />
    </>
  );
}
