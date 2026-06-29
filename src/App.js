import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <header className="app-header">
        <div className="container d-flex align-items-center">
          <i className="bi bi-grid-fill text-white fs-4 me-2"></i>
          <h1>Users Dashboard</h1>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;