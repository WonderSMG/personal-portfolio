import React from "react";
import arrowIcon from "../assets/Arrow-mobile.png";
import githubLogo from "../assets/githubLogo.svg";

const Projects = () => {
  const projects = [
    {
      Image:
        "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1748020305/desktop-preview_jtswgy.jpg",
      mobileImage:
        "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1747867469/image_24_vy5ri3.svg",
      title: "URL Shortening API landing Page",
      description:
        "Mastered CSS Grid complexities in building an innovative url shortner, enablign users to shorten a valid URL, see a list of their shortened links even after browser is refreshed, copy the shortedned link to their clipboard, etc. Leveraged the challenge to enhance skills in front-end development.",
      year: "2025",
      role: "Front-End Developer",
      liveDemo: "https://url-shortener-taupe-pi-94.vercel.app/",
      githubLink: "https://github.com/WonderSMG/url-shortener.git",
    },
    {
      Image:
        "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1748020660/desktop-design_wbvfes.jpg",
      title: "Interactive Rating Component",
      description:
        "Teamed up with a designer to breathe life into a user-friendly platform that lets visitors quickly rate products, services, or content using intuitive interactive elements making feedback fast, engaging, and easy to collect.",
      year: "2025",
      role: "Front-End Developer",
      liveDemo: "https://rating-component-project.vercel.app/",
      githubLink: "https://github.com/WonderSMG/rating-component-project.git",
    },
    {
      Image:
        "https://res.cloudinary.com/dd9nujmdt/image/upload/v1748010425/Screenshot_2025-05-23_at_3.24.10_PM_qds6e2.png",
      title: "E-commerce Burger website",
      description:
        "I designed and developed a responsive e-commerce website for a burger brand, focusing on user-friendly navigation and a visually appetizing interface. The site features an interactive menu with customizable burger options, a streamlined ordering process, and secure checkout. Emphasis was placed on mobile optimization and a modern aesthetic to enhance user experience and drive online sales.",
      year: "2025",
      role: "Full-Stack Developer",
      liveDemo: "https://eggys-place-eight.vercel.app/",
      githubLink: "https://github.com/WonderSMG/eggys-place.git",
    },
  ];

  return (
    <section className="px-4 py-12 md:px-20 lg:px-24 border-b border-[#C7C7C7] pb-14">
      {/* Heading */}
      <div className="text-left mb-12">
        <h2 className="text-[46px] md:text-[76px] h-[76px] lg:w-[464px] font-Bebas font-bold uppercase text-[#FFFFFF]">
          FEATURED PROJECTS
        </h2>
        <p className="text-[16px]  md:text-[18px] font-Manrope text-[#C7C7C7] mt-4 break-words lg:w-[600px]">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-12 lg:py-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-start gap-8"
          >
            {/* Left: Project Card */}
            <div
              className={`relative bg-[#1A1A1A] rounded-lg shadow-md flex-1 h-[343px] lg:h-[600px] lg:w-[600px] py-16 px-8 flex justify-center items-center ${
                index === 0 ? "sm:py-0" : ""
              }`}
            >
              {/* Background Text */}
              {(index === 0 || index === 2) && (
                <span className="absolute top-8 left-10 bg-black text-[8px] lg:text-[10px] font-Manrope text-[#FFFFFF] px-2 py-1 rounded-2xl z-10">
                  {index === 0 ? "Conceptual Work" : "Challenge"}
                </span>
              )}

              {/* Project Image */}
              <img
                src={
                  index === 0
                    ? window.innerWidth < 768
                      ? project.mobileImage
                      : project.Image
                    : project.Image
                }
                alt={project.title}
                className={`lg:w-[488px] lg:h-[347px] rounded-md object-contain z-0 ${
                  index === 0 ? "sm:mb-0 sm:h-full" : ""
                }`}
              />
            </div>

            {/* Right: Project Details */}
            <div className="flex flex-col gap-4 flex-1 font-Manrope lg:py-30">
              <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF]">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-[#C7C7C7] break-words">
                {project.description}
              </p>
              <p className="text-sm md:text-base text-[#FFFFFF]">
                {project.info}
              </p>
              <div className="flex flex-col gap-4 text-sm md:text-base text-[#FFFFFF] border-b border-[#C7C7C7] pb-4">
                <span className="font-bold uppercase border-b border-[#C7C7C7] pb-2">
                  Project Info
                </span>
                <div className="flex justify-between items-center border-b border-[#C7C7C7] pb-2">
                  <span className="font-light">Year</span>
                  <span className="text-[#C7C7C7]">{project.year}</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="font-light">Role</span>
                  <span className="text-[#C7C7C7]">{project.role}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4 pb-8">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  className="flex uppercase items-center gap-2 text-[#D3E97A] font-bold hover:underline"
                >
                  Live Demo
                  <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="flex uppercase items-center gap-2 text-[#D3E97A] font-bold hover:underline"
                >
                  See on GitHub
                  <img src={githubLogo} alt="GitHub Logo" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
