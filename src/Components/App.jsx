import React from "react";
import styles from "./App.module.css";

import { ItemList } from "./ItemList";
import { FirstForm } from "./Forms";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.headerText}>App Bar</span>
        <span className={styles.spacer} />
        <button className={styles.headerItem}>Item 1</button>
        <button className={styles.headerItem}>Item 2</button>
        <button className={styles.headerItem}>Item 3</button>
      </div>

      <div className={styles.container}>
        <h3>Hello World!</h3>

        <ItemList />
        <FirstForm />
      </div>
    </div>
  );
}

export default App;
