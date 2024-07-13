import { useState } from "react";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false);

  const navMenuOpen = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleDropDown = (index) => {
    setDropDownMenuOpen(dropDownMenuOpen === index ? null : index);
  };

  return (
    <>
      <div className="border border-b-1 pb-1.5 shadow-sm">
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
              <Link to="/">
                <img src="../logo.png" alt="logo" />
              </Link>
            </div>

            <div className="flex gap-4 shadow-md p-2.5 rounded-full ">
              <BiLogoTwitter className="text-blue-600 text-lg cursor-pointer" />
              <BiLogoFacebook className="text-blue-600 text-lg cursor-pointer" />
              <BiLogoLinkedin className="text-blue-800 text-lg cursor-pointer" />
            </div>

            {/* <div>
              <RxHamburgerMenu
                className="text-4xl cursor-pointer"
                onClick={navMenuOpen}
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* <div
        className={`fixed w-1/5 right-0 top-0 h-full z-10 transform ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out shadow-lg bg-white w-fullscreen768`}
      >
        <div className="bg-white">
          <div className="absolute right-0 pr-4">
            <FaTimes
              className="cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </div>

          <ul className="p-4 mt-2">
            {navbar.map((link, i) => (
              <li key={i} className="my-2 p-1.5">
                {link.cat ? (
                  <>
                    <div
                      className="flex items-center gap-2 p-1.5 rounded-full shadow-md hover:bg-blue-50"
                      onClick={() => toggleDropDown(i)}
                    >
                      <Link className="ml-3 hover:font-semibold">
                        {link.nav}
                      </Link>
                      <button>
                        {dropDownMenuOpen === i ? (
                          <IoChevronUp className="justify-center text-center" />
                        ) : (
                          <IoChevronDown />
                        )}
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden duration-700 ease-in-out ${
                        dropDownMenuOpen === i ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <ul>
                        {link.cat.map((sublink) => (
                          <li
                            key={sublink.id}
                            className="my-3 p-1.5 rounded-full shadow-md hover:bg-blue-50"
                          >
                            <Link className="ml-2 hover:font-semibold">
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="p-1.5 rounded-full shadow-md hover:bg-blue-50">
                    <Link className="ml-3 hover:font-semibold">{link.nav}</Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;
