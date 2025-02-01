import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts" className={styles.link}>Contacts</NavLink>}
      {isLoggedIn ? (
        <button onClick={() => dispatch(logout())} className={styles.button}>Logout</button>
      ) : (
        <>
          <NavLink to="/register" className={styles.link}>Register</NavLink>
          <NavLink to="/login" className={styles.link}>Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
