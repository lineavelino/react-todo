import styles from './styles.module.scss';

export function InputTask() {
    return (
        <label className={styles.container}>
            <input
                type="text"
                placeholder="Create a new todo..."
                className={styles.textInput}
            />
            <button className={styles.button}>&#43;</button>
        </label>
    )
}