import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p className={styles.userName}>Welcome, {user.email}!</p>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
