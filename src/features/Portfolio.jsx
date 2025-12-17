import React from "react";
import portfolioImg from "../assets/portfolioImg.png";

const Portfolio = () => {
  return (
    <div className="container mx-auto mt-20 py-10">
      <h1 className="font-Bebas text-[50px] md:text-[80px] lg:text-[101px] leading-none mb-5 text-[#F5F5F5] text-center ">
        My Portfolio
      </h1>
      <div className="mt-20 flex justify-evenly gap-6">
        <div className="w-1/2">
          <img src={portfolioImg} alt="My portfolio Image" className="w-full" />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <a
            href="https://www.datascienceportfol.io/ayedogbonwonder"
            className="bg-[#D3E97A] text-black rounded-xl p-2 text-2xl font-bold underline hover:text-[#D3E97A] hover:bg-black transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;