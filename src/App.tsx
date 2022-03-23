import { InputTask } from './components/InputTask';
import { Header } from './components/Header';
import { Task } from './components/Task';

export function App() {
  return (
    <main>
      <Header />
      <InputTask />
      <Task />
    </main>
   )
}