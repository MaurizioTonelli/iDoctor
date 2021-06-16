import React from "react";
import styles from "./Navbar.module.css";
import { IoIosNotifications } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <IoIosNotifications />
    </div>
  );
};
const Profile = () => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profileImage}
        src="./assets/images/doctor_profile1.jpg"
        alt="profile"
      />
      <BsChevronDown />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.userInfo}>
        <Notifications />
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
