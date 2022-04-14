import { useEffect, useState } from "react";
import { Task } from "../Task";
import styles from "./styles.module.scss";

interface taskData {
  id: number;
  title: string;
  index: number;
  checked: boolean;
}

interface taskProps {
  data: taskData[];
  dropCallback: (draggedItem: taskData, hoveredItem: taskData) => void;
  removeCallback: (task: taskData) => void;
  isCheckedCallback: (task: taskData) => void;
}

export function TaskList({
  data,
  dropCallback,
  removeCallback,
  isCheckedCallback,
}: taskProps) {
  let [tasks, setTasks] = useState([...data]);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  return (
    <section className={styles.taskListContainer}>
      <ul className={styles.listContainer}>
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            data={task}
            dropCallback={dropCallback}
            removeCallback={removeCallback}
            isCheckedCallback={isCheckedCallback}
          />
        ))}
      </ul>

      <footer className={styles.footerContainer}>
        <span>5 items left</span>

        <div className={styles.filters}>
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
        </div>

        <button type="button">Clear Completed</button>
      </footer>
    </section>
  );
}
