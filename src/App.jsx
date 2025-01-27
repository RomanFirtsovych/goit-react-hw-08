import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TasksPage from "./pages/TaskPage/TasksPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/tasks" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/tasks" />
          }
        />
        <Route
          path="tasks"
          element={<PrivateRoute component={TasksPage} redirectTo="/login" />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
