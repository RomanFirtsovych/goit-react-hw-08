import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Contact Book</h1>
      <p className={styles.description}>
        A simple and secure way to store and manage your contacts.
      </p>
    </div>
  );
};

export default HomePage;
