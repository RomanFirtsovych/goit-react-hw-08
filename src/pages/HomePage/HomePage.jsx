import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Task Manager</h1>
      <p className={styles.description}>
        Easily manage your tasks and stay organized. Register or log in to get started!
      </p>
    </div>
  );
};

export default HomePage;
