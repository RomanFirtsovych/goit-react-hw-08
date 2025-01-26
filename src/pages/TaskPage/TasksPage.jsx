import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./TasksPage.module.css";

const TasksPage = () => {
  const user = useSelector((state) => state.auth.user);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Get used to HTML and CSS" },
    { id: 2, name: "Learn JavaScript" },
    { id: 3, name: "Start using React" },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newTaskObject = {
      id: Date.now(),
      name: newTask,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.taskContainer}>
      <h1 className={styles.taskTitle}>Welcome, {user?.email || "Guest"}!</h1>
      <div className={styles.taskInputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className={styles.taskInput}
        />
        <button onClick={handleAddTask} className={styles.taskButton}>
          Add Task
        </button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span className={styles.taskText}>{task.name}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
