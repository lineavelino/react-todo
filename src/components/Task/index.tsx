import { useDrag } from "react-dnd";

import styles from "./styles.module.scss";
import cross from "../../img/icon-cross.svg";
import checked from "../../img/icon-check.svg";

export function Task({ text }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <li
      className={
        isDragging
          ? [styles.listItem, styles.itemDragging].join(" ")
          : styles.listItem
      }
      ref={dragRef}
    >
      <input type="checkbox" id="teste" checked="checked" />
      <span className={styles.checkbox}>
        <img className={styles.checked} src={checked} alt="checked" />
      </span>
      <label htmlFor="teste">{text}</label>
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
