import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Layout from "./Pages/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="./Pages/About" element={<About />} />
          <Route path="./Pages/Contact" element={<Contact />} />
          <Route path="./Pages/Projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
