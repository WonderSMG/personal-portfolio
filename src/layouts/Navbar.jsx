import React, { useState } from "react";
import robertLogo from "../assets/robert garcia logo.svg";
import mobileNavLogo from "../assets/mobileNavLogo.svg";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header>
      <main>
        <section className="flex justify-between items-center md:px-12 md:py-6 px-2 py-4">
          {/* Logo */}
          <div>
            <img src={robertLogo} alt="robertLogo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 leading-[150%] ">
              <li className="text-[#C7C7C7]">Work</li>
              <li className="text-[#C7C7C7]">About</li>
              <li className="text-[#C7C7C7]">Contact</li>
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileNav}>
              <img src={mobileNavLogo} alt="mobileNavLogo" />
            </button>
          </div>
        </section>

        {/* Mobile Navigation */}
        {isMobileNavVisible && (
          <nav className="md:hidden bg-[#0A0A0A] text-white text-center px-12 py-4">
            <ul className="flex flex-col gap-4">
              <li>Work</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )}
      </main>
    </header>
  );
};

export default Navbar;