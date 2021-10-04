import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/layouts/Nav";
function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
      </div>
    </Router>
  );
}

export default App;
