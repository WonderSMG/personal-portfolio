import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import myImage from "../assets/myImage.jpg"; 

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMoreAboutMeClick = () => {
    navigate("/about"); // Navigate to the AboutMe page
  };

  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start py-12 container mx-auto">
      {/* Left: Large "ABOUT ME" */}
      <div className="text-[#F5F5F5] font-Bebas hidden md:block text-[50px] md:text-[80px] lg:text-[101px] leading-none">
        ABOUT ME
      </div>

      {/* Right: Header, Paragraph, and Button */}
      <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
        <h2 className="text-[32px] hidden md:block text-[#FFFFFF]">
          I am a front-end developer based in Lagos. Has Applied Chemistry
          background.
        </h2>
        <p className="text-[18px] text-[#C7C7C7] leading-relaxed">
          I am a front-end developer based in Lagos looking for exciting
          opportunities. Has Applied Chemistry background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I'm exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.
        </p>
        <button
          onClick={handleMoreAboutMeClick} // Add onClick handler
          className="text-[#D3E97A] font-bold py-3 md:px-6 text-left underline uppercase transition-all hover:cursor-pointer"
        >
          More About Me
        </button>
      </div>

      {/* Mobile Only "About Me" Image */}
      <div className="block md:hidden py-10">
        <img
          className="h-[400px] w-[343px]"
          src={myImage}
          alt="aboutMeMobile"
        />
      </div>
    </section>
  );
};

export default About;