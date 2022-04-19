import { useCallback, useState, useRef, useEffect } from "react";
import { InputTask } from "../InputTask";
import { TaskList } from "../TaskList";

interface taskData {
  id: number;
  title: string;
  index: number;
  checked: boolean;
}

export function ToDo() {
  let localStorageTasks = JSON.parse(localStorage.getItem("tasks") || "{}");
  let [tasks, setTasks] = useState(localStorageTasks ?? []);
  let tasksRef = useRef<taskData[]>([]);

  const move = (arr: taskData[], from: number, to: number) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    console.log(arr);
  };

  useEffect(() => {
    tasksRef.current = tasks;
  }, [tasks]);

  let toDoCallback = useCallback(
    (task: taskData) => {
      let currentTasks = [...tasks, task];

      setTasks(currentTasks);
      localStorage.setItem("tasks", JSON.stringify(currentTasks));
    },
    [tasks]
  );

  let dropCallback = (draggedItem: taskData, hoveredItem: taskData) => {
    let tempTasks = [...tasksRef.current];
    let draggedIndex = tempTasks.findIndex(
      (el: taskData) => el.id == draggedItem.id
    );
    let hoveredIndex = tempTasks.findIndex(
      (el: taskData) => el.id == hoveredItem.id
    );

    move(tempTasks, draggedIndex, hoveredIndex);

    tempTasks.forEach((el: taskData, idx) => {
      el.index = idx;
    });

    setTasks(tempTasks);
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
  };

  let removeCallback = (task: taskData) => {
    let tempTasks = [...tasksRef.current];
    tempTasks.splice(task.index, 1);

    tempTasks.forEach((el: taskData, idx) => {
      el.index = idx;
    });

    setTasks(tempTasks);
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
  };

  let toggleCheckedCallback = (task: taskData) => {
    let tempTasks = [...tasksRef.current];
    let checkedItem = tempTasks[task.index];

    checkedItem.checked = !checkedItem.checked;

    setTasks(tempTasks);
    localStorage.setItem("tasks", JSON.stringify(tempTasks));
    console.log(tempTasks);
  };

  return (
    <>
      <InputTask toDoCallback={toDoCallback} storedTasks={localStorageTasks} />
      <TaskList
        data={tasks}
        dropCallback={dropCallback}
        removeCallback={removeCallback}
        toggleCheckedCallback={toggleCheckedCallback}
      />
    </>
  );
}
