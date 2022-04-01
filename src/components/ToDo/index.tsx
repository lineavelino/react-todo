import { useCallback, useState, useRef, useEffect } from "react";
import { InputTask } from "../InputTask";
import { TaskList } from "../TaskList";
import styles from "./styles.module.scss";

let temp = [
  { id: 1, title: "um" },
  { id: 2, title: "dois" },
  { id: 3, title: "tres" },
];

export function ToDo() {
  let [tasks, setTasks] = useState(temp);
  let tasksRef = useRef(temp);

  useEffect(() => {
    tasksRef.current = tasks;
  }, [tasks]);

  let toDoCallback = useCallback(
    (task) => {
      let currentTasks = [...tasks, task];

      setTasks(currentTasks);
    },
    [tasks]
  );

  let taskListCallback = (draggedItem, hoveredItem) => {
    let draggedIndex = tasks.indexOf(draggedItem);
    let hoveredIndex = tasks.indexOf(hoveredItem);
    let tempTasks = [...tasksRef.current];

    // tempTasks.splice(draggedIndex, 1);
    tempTasks.splice(hoveredIndex, 0, draggedItem);

    setTasks(tempTasks);
  };

  return (
    <>
      <InputTask toDoCallback={toDoCallback} />
      <TaskList tasks={tasks} taskListCallback={taskListCallback} />
    </>
  );
}
