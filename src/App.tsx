import { InputTask } from './components/InputTask';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskList } from './components/TaskList';
import styles from './App.module.scss';

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <InputTask />
        <TaskList>
          <Task />
        </ TaskList>
      </main>
    </>
  )
}