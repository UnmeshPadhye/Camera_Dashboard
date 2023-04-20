import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import AlertsPage from "./components/alerts/alertsPage"
import LiveFeed from "./components/camera/LiveFeed"
import RecordingPage from "./components/camera/Recording";
import Header from "./components/core/header";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/alerts" element={<AlertsPage />} exact />
          <Route path="/live" element={<LiveFeed />}></Route>
          <Route path="/data-recording" element={<RecordingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
