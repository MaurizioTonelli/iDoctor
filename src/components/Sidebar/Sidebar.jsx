import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { sidebarData } from "./data/sidebarData";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

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
const contains = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return true;
    }
  }
  return false;
};
const Sidebar = () => {
  const user = useContext(UserContext);
  const authorizedLinks = sidebarData.filter((item) => {
    if (!user || user.isLoading) return false;
    return contains(item.auth, user.role);
  });
  return (
    <nav className={styles.sideBar}>
      <AppTitle />
      <SearchBar />
      {!user.isLoading && user && (
        <div className={styles.links}>
          {authorizedLinks &&
            authorizedLinks.map((link, i) => (
              <Link key={i} to={link.url}>
                {link.title}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
