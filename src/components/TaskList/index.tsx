import { Task } from '../Task';
import styles from './styles.module.scss';

export function TaskList() {
    return (
        <section className={styles.taskListContainer}>
            <Task />

            <footer className={styles.footerContainer}>
                <span>
                    5 items left
                </span>

                <div className={styles.filters}>
                    <button type='button'>All</button>
                    <button type='button'>Active</button>
                    <button type='button'>Completed</button>
                </div>

                <button type='button'>
                    Clear Completed
                </button>
            </footer>
        </section>
    )
}