import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastProvider } from "./components/Toast";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";

const App = () => {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </Router>
  );
};

export default App;
