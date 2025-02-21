import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      {/* Routing */}
      <Router>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "10px", textDecoration: "none", color: "blue" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px", textDecoration: "none", color: "blue" }}>About</Link>
          <Link to="/contact" style={{ margin: "10px", textDecoration: "none", color: "blue" }}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
