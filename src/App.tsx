import { Header } from "./components/Header";

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* Main content here */}
        </main>
      </div>
    </div>
  )
}

export default App
