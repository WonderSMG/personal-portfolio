import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar";
import Hero from "./features/Hero";
import Projects from "./features/Projects";
import About from "./features/About";
import Connect from "./features/Connect";
import AboutMe from "./features/AboutMe";

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
          <Route path="/connect" element={<Connect />} /> {/* Route for Connect */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;