import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="my-32 text-center">
        <div className="flex gap-4 justify-center ">
          <div className="p-4 rounded-full hover:scale-110 transition-all duration-700 shadow-lg hover:shadow-xl cursor-pointer">
            <FaFacebook className="text-blue-600" />
          </div>
          <div className="p-4 rounded-full hover:scale-110 transition-all duration-700 shadow-lg hover:shadow-xl cursor-pointer">
            <FaInstagram className="text-white rounded-[4px] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
          </div>
          <div className="p-4 rounded-full hover:scale-110 transition-all duration-700 shadow-lg hover:shadow-xl cursor-pointer">
            <FaLinkedin className="text-blue-800" />
          </div>
          <div className="p-4 rounded-full hover:scale-110 transition-all duration-700 shadow-lg hover:shadow-xl cursor-pointer">
            <FaTwitter className="text-blue-600" />
          </div>
        </div>

        <div className="">
          <p className="mt-4 text-lg">
            Copywrite &copy; {new Date().getFullYear()}
          </p>
          <p className="mt-2 italic">
            <span className="font-sans text-white font-bold bg-gradient-to-r from-[#833ab4] via-[#e61a1a] to-[#833ab4] px-4 py-[3px] rounded-full shadow-md">
              Crafted and Developed by
              <Link to="https://www.linkedin.com/in/dipankar-majumdar-7aa5a3265">
                <span title="Please click to visit my LinkedIn profile">
                  &nbsp;Dipankar Majumdar
                </span>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
