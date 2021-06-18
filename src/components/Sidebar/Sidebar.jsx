import React from "react";
import styles from "./Sidebar.module.css";
import { sidebarData } from "./data/sidebarData";

const AppTitle = () => {
  return (
    <div className={`${styles.appTitle} ${styles.expanded}`}>
      <h1>
        iDOCTOR <span className={styles.version}>(v0.1)</span>
      </h1>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Buscar..." />
    </div>
  );
};

const Sidebar = () => {
  return (
    <nav className={styles.sideBar}>
      <AppTitle />
      <SearchBar />
      <div className={styles.links}>
        {sidebarData &&
          sidebarData.map((link, i) => (
            <a key={i} href={link.url}>
              {link.title}
            </a>
          ))}
      </div>
    </nav>
  );
};

export default Sidebar;
