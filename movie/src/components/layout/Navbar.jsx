import React, { useState } from "react";
import { FaBars, FaTimes, FaCloud } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import { activeLink } from "../../utils/ActiveLink";
import { useThemeContext } from "../../context/ThemeContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, handleThemeSwitch } = useThemeContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white dark:bg-black py-2 lg:py-4  uppercase font-poppins">
        <nav className="container flex justify-between items-center w-full">
          <div>
            <Link
              to={ROUTER.Home}
              className="pl-3 md:pl-0 text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text  from-blue-700 to-gega-red dark:from-blue-500 dark:to-gega-grey"
            >
              Movie App
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <FaBars
              size={40}
              onClick={toggleMenu}
              className="text-blue-600 dark:text-sky-400 hover:opacity-80 transition-all duration-500 text-3xl cursor-pointer"
            />
          </div>

          {/* Sidebar Menu */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0  bg-black bg-opacity-75 z-50">
              <div className="flex justify-end p-4">
                <FaTimes
                  onClick={toggleMenu}
                  className="text-blue-700  dark:text-blue-100 text-4xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col items-center text-3xl ">
                <span className=" hover:text-blue-400 transition duration-500 my-5">
                  <Link
                    to={ROUTER.Home}
                    onClick={toggleMenu}
                    className={
                      activeLink(ROUTER.Home, pathname)
                        ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                        : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                    }
                  >
                    Movies
                  </Link>
                </span>
                <span className=" hover:text-blue-400  transition duration-500 ">
                  <Link
                    to={ROUTER.WishList}
                    onClick={toggleMenu}
                    className={
                      activeLink(ROUTER.WishList, pathname)
                        ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                        : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                    }
                  >
                    WishList
                  </Link>
                </span>
              </div>
            </div>
          )}

          {/* Larger screens */}
          <div className="hidden lg:flex items-center lg:text-lg space-x-4 lg:space-x-8 ">
            <span className="  hover:text-blue-400 transition duration-500 text-2xl">
              <Link
                to={ROUTER.Home}
                className={
                  activeLink(ROUTER.Home, pathname)
                    ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                    : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                }
              >
                Movies
              </Link>
            </span>
            <span className=" hover:text-blue-400 transition duration-500 text-2xl">
              <Link
                to={ROUTER.WishList}
                className={
                  activeLink(ROUTER.WishList, pathname)
                    ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                    : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                }
              >
                WishList
              </Link>
            </span>
          </div>

          <div className="flex items-center space-x-6 lg:space-x-8 pr-3">
            <button
              className="px-4  transition-all duration-500 "
              onClick={handleThemeSwitch}
            >
              {theme === "light" ? (
                <FiSun size={45} className="text-gega-red  dark:text-sky-200 cc" />
              ) : "dark" ? (
                <BsFillCloudSunFill size={45} className="text-sky-800  dark:text-sky-200 " />
              ) : (
                ""
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
