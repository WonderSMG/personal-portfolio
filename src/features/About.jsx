import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import aboutMeMobile from "../assets/aboutMeMobile.svg"; // Example import for the mobile image

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [isLoading, setIsLoading] = useState(true); // Loading state
  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    // Show loading spinner while loading
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-[#D3E97A]"></span>
      </div>
    );
  }

  const handleMoreAboutMeClick = () => {
    navigate("/about"); // Navigate to the AboutMe page
  };

  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-12 md:px-20 lg:px-24">
      {/* Left: Large "ABOUT ME" */}
      <div className="text-[#F5F5F5] font-Bebas hidden md:block text-[50px] md:text-[80px] lg:text-[101px] leading-none">
        ABOUT ME
      </div>

      {/* Right: Header, Paragraph, and Button */}
      <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
        <h2 className="text-[32px] hidden md:block text-[#FFFFFF]">
          I am a front-end developer based in Sydney. Has Mechanical Engineering
          background.
        </h2>
        <p className="text-[18px] text-[#C7C7C7] leading-relaxed">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I'm exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.
        </p>
        <button
          onClick={handleMoreAboutMeClick} // Add onClick handler
          className="text-[#D3E97A] font-bold py-3 md:px-6 text-left underline uppercase transition-all"
        >
          More About Me
        </button>
      </div>

      {/* Mobile Only "About Me" Image */}
      <div className="block md:hidden py-10">
        <img
          className="h-[400px] w-[343px]"
          src={aboutMeMobile}
          alt="aboutMeMobile"
        />
      </div>
    </section>
  );
};

export default About;