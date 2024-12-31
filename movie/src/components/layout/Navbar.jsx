import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import { activeLink } from "../../utils/ActiveLink";
import { useThemeContext } from "../../context/ThemeContext";
import { useGlobalContext } from "../../context/GlobalContext";
import { GoMoon, GoHeartFill } from "react-icons/go";
import { FiSun } from "react-icons/fi";
import SignOutModal from "../SignOutModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, handleThemeSwitch } = useThemeContext();
  const { wishList, user, signOut } = useGlobalContext();
  const [showSignOutModal, setShowSignOutModal] = useState(false);

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
              className="pl-3 md:pl-0 text-3xl lg:text-4xl font-bold font-poppins text-transparent bg-gradient-to-r bg-clip-text  from-blue-700 to-gega-red dark:from-blue-500 dark:to-gega-grey"
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
              <div className="flex flex-col items-center text-3xl font-poppins">
                <span className=" hover:text-blue-400 font-bold transition duration-500 my-5">
                  <Link
                    to={ROUTER.Home}
                    onClick={toggleMenu}
                    className={
                      activeLink(ROUTER.Home, pathname)
                        ? "text-red-300 hover:text-sky-300    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                        : "text-sky-300 hover:text-red-300   dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                    }
                  >
                    Movies
                  </Link>
                </span>
                <span className=" hover:text-blue-400  transition duration-500 flex">
                  <Link
                    to={ROUTER.WishList}
                    onClick={toggleMenu}
                    className={
                      activeLink(ROUTER.WishList, pathname)
                        ? "text-red-300 hover:text-sky-300    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                        : "text-sky-300 hover:text-red-300  dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                    }
                  >
                    <GoHeartFill size={40} className="ms-5" />
                  </Link>
                  <span
                    className={
                      activeLink(ROUTER.WishList, pathname)
                        ? "text-base ms-2  text-red-300 hover:text-sky-300    dark:text-green-300 dark:hover:text-sky-200 transition duration-500"
                        : "text-base ms-2  text-sky-300 hover:text-red-300  dark:text-sky-200   dark:hover:text-green-200 transition duration-500"
                    }
                  >
                    {wishList.length}
                  </span>
                </span>

                {/* Sign In button for mobile */}

                <div className="flex mt-4 lg:hidden items-center">
                  {user ? (
                    <div className="flex flex-col items-center justify-center">
                      <div>
                        <img
                          src={user.image}
                          alt={user.username}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <p className="text-red-300 dark:text-sky-300 text-base my-4">
                        {user.username}
                      </p>
                      <button
                        onClick={() => setShowSignOutModal(true)}
                        className="text-lg font-poppins font-semibold ml-2 text-red-300 hover:text-red-700 dark:text-cyan-300 dark:hover:text-cyan-500"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={ROUTER.SignIn}
                      className="text-sm font-poppins font-semibold  text-red-500 hover:text-red-700 dark:text-cyan-300 dark:hover:text-cyan-500"
                    >
                      Sign In
                    </Link>
                  )}
                </div>
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
            <span className=" hover:text-blue-400 transition duration-500 text-2xl ">
              <Link
                to={ROUTER.WishList}
                className={
                  activeLink(ROUTER.WishList, pathname)
                    ? "text-gega-red hover:text-sky-600    dark:text-green-300 dark:hover:text-sky-200 transition duration-500 flex items-center relative"
                    : "text-sky-600 hover:text-gega-red   dark:text-sky-200   dark:hover:text-green-200 transition duration-500 flex items-center relative"
                }
              >
                <GoHeartFill size={40} />
                <span className="absolute left-[45px] bottom-4">
                  <span className="text-lg font-semibold">
                    {wishList.length}
                  </span>
                </span>
              </Link>
            </span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center space-x-6 lg:space-x-8 pr-3">
              <button
                className="px-4  transition-all duration-500 "
                onClick={handleThemeSwitch}
              >
                {theme === "light" ? (
                  <FiSun
                    size={45}
                    className="text-gega-red  dark:text-sky-200 cc"
                  />
                ) : "dark" ? (
                  <GoMoon
                    size={45}
                    className="text-sky-800  dark:text-sky-200 "
                  />
                ) : (
                  ""
                )}
              </button>
            </div>

            <div className="hidden lg:flex items-center lg:text-lg space-x-4 lg:space-x-8">
              {user ? (
                <div className="flex items-center justify-center relative">
                  <div className="relative group">
                    <img
                      src={user.image}
                      alt={user.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div className="absolute z-50 top-full left-1/2 font-medium transform -translate-x-1/2 mt-2 text-sm font-poppins  text-white dark:text-black bg-gega-red dark:bg-cyan-300 py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {user.username}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowSignOutModal(true)}
                    className="text-sm font-semibold ml-2 text-red-500 hover:text-red-700 dark:text-cyan-300 dark:hover:text-cyan-500"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to={ROUTER.SignIn}
                  className="text-sm font-semibold  text-red-500 hover:text-red-700 dark:text-cyan-300 dark:hover:text-cyan-500"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
      <SignOutModal
        showSignOutModal={showSignOutModal}
        closeSignOutModal={() => setShowSignOutModal(false)}
        signOut={signOut}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

export default Navbar;
