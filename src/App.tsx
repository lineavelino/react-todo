import { Header } from "./components/Header";
import { ToDo } from "./components/ToDo";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./App.module.scss";

export function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <main className={styles.container}>
        <ToDo />
      </main>
    </DndProvider>
  );
}
