import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Layouts/Navbar";
import Hero from "./features/Hero";
import Projects from "./features/Projects";
import About from "./features/About";


function App() {
  return (
    <>
      <main className="bg-black min-h-screen">
        <Navbar/>
        <Hero/>
        <Projects/>
        <About/>
      </main>
    </>
  );
}

export default App;
