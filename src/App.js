import Navbar from "./components/Navbar/Navbar.jsx";
import "./globals.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.sideBar}>
        <Sidebar />
      </div>
      <div className={styles.content}></div>
    </div>
  );
}

export default App;
