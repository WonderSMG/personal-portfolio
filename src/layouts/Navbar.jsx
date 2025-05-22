// filepath: /Users/mac/Desktop/Personal-portfolio/src/layouts/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import robertLogo from "../assets/robert garcia logo.svg";
import mobileNavLogo from "../assets/mobileNavLogo.svg";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <main>
        <section className="flex justify-between items-center md:px-12 md:py-6 px-2 py-4">
          {/* Logo */}
          <div>
            <img src={robertLogo} alt="robertLogo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 leading-[150%]">
              <button className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]">Work</button>
              <button className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]">About</button>
              <Link
                to="connect"
                smooth={true}
                duration={500}
                className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]"
              >
                Contact
              </Link>
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
              <Link
                to="connect"
                smooth={true}
                duration={500}
                onClick={toggleMobileNav}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </ul>
          </nav>
        )}
      </main>
    </header>
  );
};

export default Navbar;