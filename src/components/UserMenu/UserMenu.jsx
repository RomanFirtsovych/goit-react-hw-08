import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <p className={styles.userName}>Welcome, {user.email}!</p>
      <button onClick={() => dispatch(logout())} className={styles.logoutButton}>Logout</button>
    </div>
  );
};

export default UserMenu;
