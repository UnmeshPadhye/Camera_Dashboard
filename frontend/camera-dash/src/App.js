import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Header from "./components/core/header";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} exact/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
