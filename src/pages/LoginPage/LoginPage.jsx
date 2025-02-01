import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authTitle}>Log In</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
