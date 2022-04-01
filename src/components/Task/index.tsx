import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

import styles from "./styles.module.scss";
import cross from "../../img/icon-cross.svg";
import checked from "../../img/icon-check.svg";

export function Task({ task, listCallback }) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TASK",
    hover(item) {
      // console.log(item);
      // console.log(task);
    },
    drop: (item) => moveToDo(item, task),
  }));

  const moveToDo = (item, task) => {
    listCallback(item, task);
  };

  dragRef(dropRef(ref));

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
      <img className={styles.cross} src={cross} alt="delete" />
    </li>
  );
}

{
  /* 
    <li className={styles.listItem}>
      <input type="checkbox" />
      <span className={styles.checkbox}></span>
      <label>Read for 1 hour</label>
      <img className={styles.cross} src={cross} alt="delete" />
    </li>
    <li className={styles.listItem}>
      <input type="checkbox" />
      <span className={styles.checkbox}></span>
      <label>Eat a cake</label>
      <img className={styles.cross} src={cross} alt="delete" />
    </li> */
}
