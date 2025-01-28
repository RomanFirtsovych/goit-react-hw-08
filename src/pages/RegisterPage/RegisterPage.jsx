import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom"; 
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register({ name, email, password })).unwrap();
      navigate("/tasks"); 
    } catch (error) {
      console.error("Registration failed:", error); 
      alert("Registration failed. Please try again."); 
    }
  };

  if (isLoggedIn) {
    navigate("/tasks");
  }

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authTitle}>Register</h2>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className={styles.authInput}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.authInput}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className={styles.authInput}
        />
        <button type="submit" className={styles.authButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
