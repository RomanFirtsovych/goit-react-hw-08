import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={styles.link}>
          Tasks
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          Login
        </NavLink>
        <NavLink to="/register" className={styles.link}>
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
