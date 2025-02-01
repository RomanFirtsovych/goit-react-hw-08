import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        {isLoggedIn ? <NavLink to="/contacts" className={styles.link}>Contacts</NavLink> : <AuthNav />}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default AppBar;
