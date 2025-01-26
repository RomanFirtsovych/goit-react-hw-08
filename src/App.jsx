import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TasksPage from "./pages/TaskPage/TasksPage";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={RegisterPage}
              redirectTo="/tasks"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={LoginPage}
              redirectTo="/tasks"
            />
          }
        />
        <Route
          path="/tasks"
          element={<PrivateRoute component={TasksPage} redirectTo="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
