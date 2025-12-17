import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar";
import Hero from "./features/Hero";
import Projects from "./features/Projects";
import About from "./features/About";
import AboutMe from "./features/AboutMe";
import Connect from "./features/Connect";
import Portfolio from "./features/Portfolio";

function App() {
  return (
    <Router>
      <main className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <About />
                <Connect />
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        
      </main>
    </Router>
  );
}

export default App;
