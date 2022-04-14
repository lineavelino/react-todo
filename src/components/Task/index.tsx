import { useDrag, useDrop } from "react-dnd";
import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import cross from "../../img/icon-cross.svg";
import checked from "../../img/icon-check.svg";

interface taskData {
  id: number;
  title: string;
  index: number;
  checked: boolean;
}

interface taskProps {
  data: taskData;
  dropCallback: (draggedItem: taskData, hoveredItem: taskData) => void;
  removeCallback: (task: taskData) => void;
  isCheckedCallback: (task: taskData) => void;
}

export function Task({
  data,
  dropCallback,
  removeCallback,
  isCheckedCallback,
}: taskProps) {
  let [task, setTask] = useState({ ...data });

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setTask(data);
  }, [data]);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => dropCallback(item as taskData, task),
  }));

  dragRef(dropRef(ref));

  function handleDelete(task: taskData) {
    removeCallback(task);
  }

  function handleChecked(task: taskData) {
    isCheckedCallback(task);
  }

  return (
    <li
      className={
        isDragging
          ? [styles.listItem, styles.itemDragging].join(" ")
          : styles.listItem
      }
      ref={ref}
    >
      <input type="checkbox" id="teste" />
      <span className={styles.checkbox}>
        <img src={checked} alt="checkbox" onClick={() => handleChecked(task)} />
      </span>
      <label htmlFor="teste">{task.title}</label>
      <img
        className={styles.cross}
        src={cross}
        alt="delete"
        onClick={() => handleDelete(task)}
      />
    </li>
  );
}
