import styles from './styles.module.scss';
import moon from '../../img/icon-moon.svg';

export function Header() {
    return (
        <main className={styles.backgroundHeader}>
            <div className={styles.headerContainer}>
                <h1>TODO</h1>
                <img src={moon} alt="Lua para trocar de tema" />
            </div>
        </main>
    )
}