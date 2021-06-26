import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { IoIosNotifications } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import UserContext from "../../UserContext";
import appData from "../../assets/data/appData";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <IoIosNotifications />
    </div>
  );
};
const Profile = ({ user }) => {
  const [openActions, setOpenActions] = useState(false);
  const logout = () => {
    localStorage.setItem("token", null);
    window.location.reload(false);
  };

  return (
    <div
      className={styles.profile}
      onMouseEnter={() => setOpenActions(true)}
      onMouseLeave={() => setOpenActions(false)}
    >
      {!user.isLoading && user && (
        <img
          className={styles.profileImage}
          src={appData.apiUrl + "/images/" + user.profileImage}
          alt="profile"
        />
      )}
      <BsChevronDown />
      {openActions && (
        <div className={styles.actions}>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const user = useContext(UserContext);
  return (
    <nav className={styles.navBar}>
      <div className={styles.userInfo}>
        <Notifications />
        <Profile user={user} />
      </div>
    </nav>
  );
};

export default Navbar;
