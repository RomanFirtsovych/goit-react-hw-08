import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles["nav-container"]}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]
        }
      >
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]
            }
          >
            Contacts
          </NavLink>
          <button onClick={handleLogout} className={styles["nav-button"]}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles["nav-link"]} ${styles["active"]}` : styles["nav-link"]
            }
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
