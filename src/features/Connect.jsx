import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import linkedinIcon from "../assets/linkedinLogo.svg";
import githubIcon from "../assets/githubLogo.svg";
import twitterIcon from "../assets/twitterLogo.svg";
import instagramIcon from "../assets/instagramLog.svg";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_o92hu8e", // Service ID from .env
        "template_o0frbhp", // Template ID from .env
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "RWEBB7O5co8YkyJlM" // Public Key from .env
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          setErrors({
            form: "Failed to send your message. Please try again later.",
          });
        }
      );
  };

  return (
    <section id="connect" className="flex flex-col lg:flex-row lg:justify-between px-4 py-12 md:px-20 lg:px-24 pt-24">
      {/* Left Section */}
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h2 className="text-[30px] md:text-[60px] font-Bebas font-bold uppercase text-[#FFFFFF]">
          Let's Connect
        </h2>
        <p className="text-sm md:text-base text-[#C7C7C7] font-Manrope">
          Say hello at{" "}
          <a
            href="mailto:ayedogbonwonder@gmail.com"
            className="text-white underline decoration-[#c2d86a] hover:text-[#c2d86a]"
          >
            ayedogbonwonder@gmail.com
          </a>
          . <br />
          For more info, here is my{" "}
          <a
            href="/resume"
            className="text-white underline decoration-[#c2d86a]"
          >
            resume
          </a>
          .
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-12 text-sm text-[#C7C7C7] font-Manrope hidden lg:block pt-36">
          &copy; 2025 Robert Garcia
        </div>
      </div>

      {/* Right Section: Form */}
      
      <div className="flex flex-col gap-6 font-Manrope  lg:w-1/2 mt-12 lg:mt-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] placeholder-[#C7C7C7] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] placeholder-[#C7C7C7] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] placeholder-[#C7C7C7] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#1A1A1A] text-[#FFFFFF] placeholder-[#C7C7C7] focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#D3E97A] text-[#0A0A0A] w-30 uppercase font-bold py-3 px-6 rounded-4xl hover:bg-[#c2d86a] cursor-pointer transition-all"
          >
            Submit
          </button>
          {successMessage && (
            <p className="text-green-500 text-sm mt-4">{successMessage}</p>
          )}
          {errors.form && (
            <p className="text-red-500 text-sm mt-4">{errors.form}</p>
          )}
        </form>
      </div>
      <div className="mt-12 text-sm text-[#C7C7C7] lg:hidden">
        &copy; 2025 Robert Garcia
      </div>
    </section>
  );
};

export default Connect;
