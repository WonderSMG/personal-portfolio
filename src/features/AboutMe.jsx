import React from "react";
import downloadImg from "../assets/downloadImg.svg";
import dotLogo from "../assets/dot-icon.png";
import linkedinLogo from "../assets/linkedinLogo.svg";
import githubLogo from "../assets/githubLogo.svg";
import aboutMeImg from "../assets/myImage.jpg";


const About = () => {
  return (
    <main className="">
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-12 md:px-20 lg:px-24 pt-36">
        {/* Left: Large "ABOUT ME" */}
        <div className="text-[#F5F5F5] font-Bebas text-[50px] md:text-[80px] lg:text-[101px] leading-none mb-5">
          ABOUT ME
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
          <h2 className="text-[24px] text-[#FFFFFF]">
            I am a front-end developer based in Lagos. Has Applied Chemistry
            background.
          </h2>
          <p className="text-[18px] text-[#C7C7C7] leading-[160%]">
            I am a front-end developer based in Lagos looking for exciting
            opportunities. Has Applied Chemistry background. Likes to focus on
            accessibility when developing. Passionate and curious about solving
            problems. Currently, I'm exploring Reactjs, Typescript, and a bit of
            Designing. While I am not programming, I enjoy playing football,
            photography and playing Valorant. Learning more to improve skill.
          </p>
          <div className="text-[#0A0A0A] flex gap-4 lg:w-auto w-full">
            <article className="bg-[#D3E97A] flex items-center rounded-full gap-4 px-6 py-3">
              <button className="font-Manrope text-sm lg:text-base whitespace-nowrap hover:cursor-pointer">
                DOWNLOAD RESUME
              </button>
              <img
                className="bg-black rounded-full w-4 h-4 lg:w-3 lg:h-3 hidden lg:block"
                src={dotLogo}
                alt="dotLogo"
              />
              <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center lg:hidden">
                <img className="w-4 h-4" src={downloadImg} alt="arrowLogo" />
              </div>
            </article>
            <button className="bg-[#222222] rounded-full p-3 hover:cursor-pointer">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                src={linkedinLogo}
                alt="linkedinLogo"
              />
            </button>
            <button className="bg-[#222222] rounded-full p-3 hover:cursor-pointer">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                src={githubLogo}
                alt="githubLogo"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-10">
        <img className=" w-[88%]" src={aboutMeImg} alt="aboutMeImg" />
      </section>
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-12 md:px-20 lg:px-24 border-b border-[#C7C7C7]">
        {/* Left: Large "ABOUT ME" */}
        <div className="text-[#F5F5F5] font-Bebas text-[50px] md:text-[80px] lg:text-[76pxpx] leading-none mb-4">
          MY CAPABILITIES
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 ">
          <h2 className="text-[18px] font-Manrope text-[#FFFFFF]">
            I am always lookng forward to add more skills to my portfolio. I am working on developing a solid experience in JavaScript, TypeScript, HTML, and CSS, to bring a strong foundation in front-end development and modern web technologies. I excel at building responsive, user-friendly interfaces and developing clean, maintainable code. I am dedicated to delivering efficient, high-quality solutions that enhance user experience and meet project goals.
          </h2>
          <div className="text-[16px] text-white leading-">
            <div className="flex flex-wrap gap-4 mb-4 font-Manrope">
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-4 py-2 text-[14px] text-[#C7C7C7]">
                HTML
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-4 py-2 text-[14px] text-[#C7C7C7]">
                CSS
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-4 py-2 text-[14px] text-[#C7C7C7]">
                JAVASCRIPT
              </h1>

              <h1 className="rounded-[100px] bg-black border border-[#484848] px-4 py-2 text-[14px] text-[#C7C7C7] lg:mt-0">
                JQUERY
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-4 py-2 text-[14px] text-[#C7C7C7] lg:mt-0">
                ACCESSIBILITY
              </h1>

              <h1 className="rounded-[100px] bg-black border border-[#484848] px-4 py-2 text-[14px] text-[#C7C7C7] lg:mt-0">
                FIGMA
              </h1>
              <h1 className="rounded-[100px] bg-black border border-[#484848] px-4 py-2 text-[14px] text-[#C7C7C7] lg:mt-0">
                TAILWIND CSS
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-12 md:px-20 lg:px-24 border-b border-[#C7C7C7]">
        {/* Left: Large "ABOUT ME" */}
        <div className="text-[#F5F5F5] font-Bebas text-[50px] md:text-[80px] lg:text-[76px] leading-none mb-4">
          MY EXPERIENCE
        </div>

        {/* Right: Header, Paragraph, and Button */}
        <div className="flex flex-col gap-6 lg:w-1/2 font-Manrope">
          <div className="mb-5">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-[18px] text-[#FFFFFF]">
                Freelance developer
              </h2>
              <h2 className="text-[16px] text-[#C7C7C7]">December 2024 - Present</h2>
            </div>
            <div>
              <p className="text-[16px] text-[#C7C7C7] leading-relaxed">
                Ullamco laboris nisi ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="md:flex justify-between items-center mb-4">
              <h2 className="text-[18px] text-[#FFFFFF]">Front-End Intern</h2>
              <h2 className="text-[16px] text-[#C7C7C7]">
                May 2025 - Present
              </h2>
            </div>
            <h3 className="text-[#D3E97A]">TechStudio Academy</h3>
            <p className="text-[16px] text-[#C7C7C7] leading-relaxed pt-4">
              I am a front-end developer based in Lagos looking for exciting
              opportunities. Has Applied Chemistry background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I'm exploring Reactjs, Typescript,
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
