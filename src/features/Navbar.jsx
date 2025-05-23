import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import robertLogo from "../assets/robert garcia logo.svg";
import mobileNavLogo from "../assets/mobileNavLogo.svg";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible); // Toggle the mobile nav visibility
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
    setIsMobileNavVisible(false); // Close the mobile nav if open
  };

  const handleContactClick = () => {
    navigate("/connect"); // Navigate to the Connect page
    setIsMobileNavVisible(false); // Close the mobile nav after navigation
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <main>
        <section className="flex justify-between items-center md:px-12 md:py-6 px-2 py-4">
          {/* Logo */}
          <div onClick={handleLogoClick}>
            {/* <img src={robertLogo} alt="robertLogo" /> */}
            <h1 className="text-[#C7C7C7] font-Bebas font-normal md:text-[40px] text-[24px]">WONDER AYEDOGBON</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 leading-[150%]">
              <button
                className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]"
                onClick={() => navigate("/about")} // Navigate to About page
              >
                About
              </button>
              <button
                className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]"
                onClick={() => navigate("/work")} // Example for navigating to Work page
              >
                Work
              </button>
              <button
                className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]"
                onClick={handleContactClick} // Navigate to Connect page
              >
                Contact
              </button>
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
              <button
                className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]"
                onClick={() => navigate("/about")} // Navigate to About page
              >
                About
              </button>
              <button
                className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]"
                onClick={() => navigate("/work")} // Example for navigating to Work page
              >
                Work
              </button>
              <button
                className="text-[#C7C7C7] cursor-pointer hover:text-[#D3E97A]"
                onClick={handleContactClick} // Navigate to Connect page
              >
                Contact
              </button>
            </ul>
          </nav>
        )}
      </main>
    </header>
  );
};

export default Navbar;