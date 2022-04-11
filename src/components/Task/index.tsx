import { useDrag, useDrop } from "react-dnd";
import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import cross from "../../img/icon-cross.svg";
import checked from "../../img/icon-check.svg";

export function Task({ data, dropCallback, removeCallback }) {
  let [task, setTask] = useState({ ...data });

  const ref = useRef();

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

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => dropCallback(item, task),
  }));

  dragRef(dropRef(ref));

  function handleDelete(task) {
    removeCallback(task);
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
      <input type="checkbox" id="teste" checked="checked" readOnly />
      <span className={styles.checkbox}>
        <img className={styles.checked} src={checked} alt="checked" />
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
