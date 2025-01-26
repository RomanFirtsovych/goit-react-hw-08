import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      <NavLink to="/tasks" className={styles.link}>
        Tasks
      </NavLink>
    </nav>
  );
};

export default Navigation;
