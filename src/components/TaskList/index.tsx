import styles from './styles.module.scss';

export function TaskList() {
    return (
        <section className={styles.taskListContainer}>
            <div>
                <li>Jog around the park 3x</li>
                <li>10 minutes meditation</li>
                <li>Read for 1 hour</li>
                <li>Pick up groceries</li>
                <li>Complete Todo App on Frontend Mentor</li>

            </div>

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