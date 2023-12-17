import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "../../constant/Router";
import { useGlobalContext } from "../../context/GlobalContext";
import { activeLink } from "../../utils/ActiveLink";

const Navbar = () => {
  const { search, setSearch } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const resetSearch = () => {
    setSearch("");
    window.location.reload(true);
  };

  return (
    <>
      <header className="bg-black py-6 lg:py-8 dark:text-gega-grey text-black uppercase font-poppins">
        <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
          <Link
            to={ROUTER.Home}
            className="pl-3 md:pl-0 text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-gega-grey"
          >
            Movie App
          </Link>

          <nav className="flex justify-between flex-1">
            {/* Hamburger Menu */}
            <div className="lg:hidden mt-2 ml-4 ">
              <FaBars
                onClick={toggleMenu}
                className="text-sky-300 hover:opacity-80 transition-all duration-500 text-3xl cursor-pointer"
              />
            </div>

            {/* Sidebar Menu */}
            {isMenuOpen && (
              <div className="lg:hidden fixed inset-0 bg-black bg-opacity-75 z-50">
                <div className="flex justify-end p-4">
                  <FaTimes
                    onClick={toggleMenu}
                    className="text-blue-100 text-4xl cursor-pointer"
                  />
                </div>
                <div className="flex flex-col items-center text-3xl ">
                  <span className=" hover:text-blue-400 transition duration-500 my-5">
                    <Link
                      to={ROUTER.Home}
                      onClick={toggleMenu}
                      className={
                        activeLink(ROUTER.Home, pathname)
                          ? "text-green-300 hover:text-sky-200 transition duration-500"
                          : "text-sky-200  hover:text-green-200 transition duration-500"
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
                          ? "text-green-300 hover:text-sky-200 transition duration-500"
                          : "text-sky-200  hover:text-green-200 transition duration-500"
                      }
                    >
                      WishList
                    </Link>
                  </span>
                </div>
              </div>
            )}

            {/* Larger screens */}
            <div className="hidden lg:flex items-center lg:text-lg space-x-4 lg:space-x-8">
              <span className="  hover:text-blue-400 transition duration-500 text-2xl">
                <Link
                  to={ROUTER.Home}
                  className={
                    activeLink(ROUTER.Home, pathname)
                      ? "text-green-300 hover:text-sky-200 transition duration-500"
                      : "text-sky-200  hover:text-green-200 transition duration-500"
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
                      ? "text-green-300 hover:text-sky-200 transition duration-500"
                      : "text-sky-200   hover:text-green-200 transition duration-500"
                  }
                >
                  WishList
                </Link>
              </span>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6">
              <form>
                <div className="group px-6 mx-4 py-2 text-sky-400 ">
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-white bg-transparent border-b border-sky-400  focus:outline-none w-24 lg:w-48 transition duration-500 "
                  />
                  <button className="group-hover:ml-0 transition duration-500 ">
                    <span className="text-black group-hover:text-sky-400  transition duration-400 text-xl">
                      <FaSearch />
                    </span>
                  </button>
                  <button
                    className=" group-hover:bg-blue-300 transition duration-500 text-lg ml-2 rounded
                    px-3  text-sky-600  text-semibold"
                    onClick={resetSearch}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
