import React, { useState } from "react";
import Layout from "./layout/Layout";
import { useGlobalContext } from "../context/GlobalContext";
import { FaSearch  } from "react-icons/fa";

const WishList = () => {
  const { wishList, deleteFromWishList, removeAll } = useGlobalContext();
  const [searchInput, setSearchInput] = useState("");

  const filteredWishList = wishList.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchInput.toLowerCase());
  });


  return (
    <Layout>
      <section className="py-20 bg-white dark:bg-black flex flex-col justify-center items-center">
        <div className="mb-12 -mt-14">
          <form>
            <div className="group px-6 mx-4 py-2 text-sky-700 dark:text-sky-400 ">
              <input
                type="text"
                placeholder="Search Your WishList"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="text-black  dark:text-sky-50 bg-transparent border-b border-gega-red dark:border-sky-400  focus:outline-none w-24 lg:w-48 transition duration-500 "

              />
              <button className="group-hover:ml-0 transition duration-500 ">
              <span className=" text-white dark:text-black group-hover:text-gega-red dark:group-hover:text-sky-400 transition duration-400 text-xl">
                  <FaSearch />
                </span>
              </button>
              <button
             className="group-hover:bg-red-200  dark:group-hover:bg-blue-100 transition duration-500 text-lg ml-3 rounded
              px-3 text-gega-red dark:text-sky-500  text-semibold"
                onClick={removeAll}
              >
                Remove All Movies
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white dark:bg-black container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {filteredWishList && filteredWishList.length > 0 ? (
            filteredWishList.map((movie) => {
              return (
                <div className="mx-auto">
                  <div className="group relative overflow-hidden cursor-pointer">
                    <img
                      src={movie.Poster}
                      className="group-hover:scale-110 group-hover:opacity-50 duration-500 rounded-sm"
                      alt={movie.Title}
                    />
                    <div className="absolute px-6 bottom-8">
                      <h2 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-6 font-poppins font-bold duration-500 text-xl">
                        {movie.Title.slice(0, 13)}
                        <span className="group-hover:text-green-500 ml-2">
                          {movie.Year}
                        </span>
                      </h2>

                      <p className="text-md opacity-0 group-hover:opacity-100 group-hover:mb-2 duration-500 text-gega-grey">
                        <button
                          className="px-3 py-2 bg-indigo-500 rounded-md hover:bg-gega-red duration-500 "
                          onClick={() => deleteFromWishList(movie.imdbID)}
                        >
                          Dlete From WishList
                        </button>
                      </p>
                      <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-3 group-hover:bottom-2 group-hover:opacity-100 duration-500"></div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="h-[450px] w-full">
              <h1 className="text-gega-red text-3xl capitalize">
                your wishList is empty
              </h1>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WishList;
