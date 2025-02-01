import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authTitle}>Register</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
