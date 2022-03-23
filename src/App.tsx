import { InputTask } from './components/InputTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import styles from './App.module.scss';

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <InputTask />
        <TaskList />
      </main>
    </>
  )
}