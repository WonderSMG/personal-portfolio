import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Hero from "./features/Hero";
import Projects from "./features/Projects";
import About from "./features/About";
import Connect from "./features/Connect";

function App() {
  return (
    <Router>
      <main className="bg-black min-h-screen">
        <Navbar />
        {/* Render all components by default */}
        <Hero />
        <Projects />
        <About />
        <Connect />
      </main>
    </Router>
  );
}

export default App;