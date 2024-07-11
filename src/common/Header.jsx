import React from "react";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { MdOutlineSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="border border-b-1 pb-1 shadow-sm">
        <div className="w-10/12 m-auto">
          <div className="sm:flex items-center justify-between">
            <div className="relative">
              <div className="flex items-center border rounded-full shadow-md mt-1">
                <div className="mx-2 text-2xl text-gray-500">
                  <MdOutlineSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:outline-none w-full py-1.5"
                />
              </div>
            </div>

            <div className="w-28 cursor-pointer">
              <img src="./logo.png" alt="logo" />
            </div>

            <div className="flex gap-4 shadow-md p-2.5 rounded-full">
              <BiLogoTwitter className="text-blue-600 text-lg cursor-pointer" />
              <BiLogoFacebook className="text-blue-600 text-lg cursor-pointer" />
              <BiLogoLinkedin className="text-blue-800 text-lg cursor-pointer" />
            </div>

            <div>
              <RxHamburgerMenu className="text-4xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Header;
