import React from "react";
import arrowIcon from "../assets/Arrow-mobile.png";
import githubLogo from "../assets/githubLogo.svg";

const Projects = () => {
  const projects = [
    {
      Image:
        "https://res.cloudinary.com/dd9nujmdt/image/upload/v1747787398/projectImg1_ty9no4.svg",
      mobileImage:
        "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1747867469/image_24_vy5ri3.svg",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2023",
      role: "Front-End Developer",
      liveDemo: "#",
      githubLink: "#",
    },
    {
      Image:
        "https://res.cloudinary.com/dd9nujmdt/image/upload/v1747787413/projectImg2_wz3xdk.svg",
      title: "Blog site for World News",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.",
      year: "2022",
      role: "Full-Stack Developer",
      liveDemo: "#",
      githubLink: "#",
    },
    {
      Image:
        "https://res.cloudinary.com/dd9nujmdt/image/upload/v1747787413/projectImg3_dki34b.svg",
      title: "E-commerce product page",
      description:
        "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      year: "2022",
      role: "Front-End Developer",
      liveDemo: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="px-4 py-12 md:px-20 lg:px-24 border-b border-[#C7C7C7] pb-14">
      {/* Heading */}
      <div className="text-left mb-12">
        <h2 className="text-[46px] md:text-[76px] h-[76px] lg:w-[464px] font-Bebas font-bold uppercase text-[#FFFFFF]">
          FEATURED PROJECTS
        </h2>
        <p className="text-[16px]  md:text-[18px] font-Manrope text-[#C7C7C7] mt-4 break-words">
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
        className={`relative bg-[#1A1A1A] rounded-lg shadow-md flex-1 h-[343px] lg:h-[600px] py-16 px-8 flex justify-center items-center ${
          index === 0 || index === 2 ? "sm:py-0" : ""
        }`}
      >
        {/* Background Text for First and Third Projects */}
        {(index === 0 || index === 2) && (
          <span className="absolute top-4 left-4 bg-black text-[8px] lg:text-[10px] font-Manrope text-[#FFFFFF] px-2 py-1 rounded-2xl z-10">
            {index === 0 ? "Conceptual Work" : "Challenge" }
          </span>
        )}

        {/* Project Image */}
        {console.log("Image Path:", project.Image, "Mobile Image Path:", project.mobileImage)}

        <img
          src={
            index === 0 || index === 2
              ? window.innerWidth < 768
                ? project.mobileImage
                : project.Image
              : project.Image
          }
          alt={project.title}
          className={`lg:w-[488px] lg:h-[347px] rounded-md object-contain z-0 ${
            index === 0 || index === 2 ? "sm:mb-0 sm:h-full" : ""
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
            <p className="text-sm md:text-base text-[#FFFFFF]">{project.info}</p>
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
                className="flex uppercase items-center gap-2 text-[#D3E97A] font-bold hover:underline"
              >
                Live Demo
                <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
              </a>
              <a
                  href={project.githubLink}
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
