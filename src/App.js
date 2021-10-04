import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Nav></Nav>
      <Route path="/" component={Dashboard} />
    </Router>
  );
}

export default App;
