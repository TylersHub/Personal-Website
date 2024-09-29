import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
