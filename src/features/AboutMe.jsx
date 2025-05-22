import React from "react";
import arrowLogo from "../assets/Arrow-mobile.png";
import dotLogo from "../assets/dot-icon.png";
import linkedinLogo from "../assets/linkedinLogo.svg";
import githubLogo from "../assets/githubLogo.svg";
import aboutMeImg from "../assets/aboutMeImg.svg";

const About = () => {
  return (
    <main className="min-h-screen ">
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-12 md:px-20 lg:px-24 pt-36">
        {/* Left: Large "ABOUT ME" */}
        <div className="text-[#F5F5F5] font-Bebas hidden md:block text-[50px] md:text-[80px] lg:text-[101px] leading-none">
          ABOUT ME
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
          <h2 className="text-[24px] text-[#FFFFFF]">
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.
          </h2>
          <p className="text-[18px] text-[#C7C7C7] leading-[160%]">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I'm exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </p>
          <div className="text-[#0A0A0A] flex gap-4 lg:w-auto w-full">
            <article className="bg-[#D3E97A] flex items-center rounded-full gap-4 px-6 py-3">
              <button className="font-Manrope text-sm lg:text-base whitespace-nowrap">
                DOWNLOAD RESUME
              </button>
              <img
                className="bg-black rounded-full w-4 h-4 lg:w-3 lg:h-3 hidden lg:block"
                src={dotLogo}
                alt="dotLogo"
              />
              <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center lg:hidden">
                <img className="w-3 h-3" src={arrowLogo} alt="arrowLogo" />
              </div>
            </article>
            <button className="bg-[#222222] rounded-full p-3">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                src={linkedinLogo}
                alt="linkedinLogo"
              />
            </button>
            <button className="bg-[#222222] rounded-full p-3">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                src={githubLogo}
                alt="githubLogo"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <img
          className=" w-[88%] "
          src={aboutMeImg}
          alt="aboutMeImg"
        />
      </section>
    </main>
  );
};

export default About;
