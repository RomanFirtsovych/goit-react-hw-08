import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store, { persistor } from "./redux/store";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./ErrorBoundary"; // Додано ErrorBoundary
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
          <Toaster position="top-right" />
        </ErrorBoundary>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
