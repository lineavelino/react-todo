import { useCallback, useState, useRef, useEffect } from "react";
import { InputTask } from "../InputTask";
import { TaskList } from "../TaskList";
import styles from "./styles.module.scss";

export function ToDo() {
  let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
  let [tasks, setTasks] = useState(localStorageTasks ?? []);
  let tasksRef = useRef([]);

  const move = (arr, from, to) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    console.log(arr);
  };

  useEffect(() => {
    tasksRef.current = tasks;
  }, [tasks]);

  let toDoCallback = useCallback(
    (task) => {
      let currentTasks = [...tasks, task];

      setTasks(currentTasks);
      localStorage.setItem("tasks", JSON.stringify(currentTasks));
    },
    [tasks]
  );

  let dropCallback = (draggedItem, hoveredItem) => {
    let tempTasks = [...tasksRef.current];
    let draggedIndex = tempTasks.findIndex((el) => el.id == draggedItem.id);
    let hoveredIndex = tempTasks.findIndex((el) => el.id == hoveredItem.id);

    move(tempTasks, draggedIndex, hoveredIndex);

    tempTasks.forEach((el, idx) => {
      el.index = idx;
    });

    setTasks(tempTasks);
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
  };

  let removeCallback = (task) => {
    let tempTasks = [...tasksRef.current];
    tempTasks.splice(task.index, 1);

    tempTasks.forEach((el, idx) => {
      el.index = idx;
    });

    setTasks(tempTasks);
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
  };

  return (
    <>
      <InputTask toDoCallback={toDoCallback} storedTasks={localStorageTasks} />
      <TaskList
        data={tasks}
        dropCallback={dropCallback}
        removeCallback={removeCallback}
      />
    </>
  );
}
