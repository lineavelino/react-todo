import { useCallback, useState, useRef, useEffect } from "react";
import { InputTask } from "../InputTask";
import { TaskList } from "../TaskList";
import styles from "./styles.module.scss";

export function ToDo() {
  let [tasks, setTasks] = useState([]);
  let tasksRef = useRef([]);

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
    let tempTasks = [...tasksRef.current];
    let draggedIndex = tempTasks.findIndex((el) => el.id == draggedItem.id);
    let hoveredIndex = tempTasks.findIndex((el) => el.id == hoveredItem.id);

    move(tempTasks, draggedIndex, hoveredIndex);

    tempTasks.forEach((el, idx) => {
      el.index = idx;
    });

    setTasks(tempTasks);
  };

  const move = (arr, from, to) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
  };

  return (
    <>
      <InputTask toDoCallback={toDoCallback} />
      <TaskList data={tasks} taskListCallback={taskListCallback} />
    </>
  );
}
