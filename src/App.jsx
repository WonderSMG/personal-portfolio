import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar";
import Hero from "./features/Hero";
import Projects from "./features/Projects";
import About from "./features/About";
import AboutMe from "./features/AboutMe";
import Connect from "./features/Connect";

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
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        {/* Connect Component Always Below */}
        <Connect />
      </main>
    </Router>
  );
}

export default App;