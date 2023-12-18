import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Hero from "./Hero";
import { GetMovies, GetSearchMovies } from "../api/GetRequset";
import { useGlobalContext } from "../context/GlobalContext";
import {
  FaSearchengin,
  FaHeart,
  FaRegHeart,
  FaCircleChevronRight,
} from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import MovieModal from "./MovieModal";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/Router";

const Home = () => {
  const {
    movies,
    setMovies,
    addToWishList,
    isMovieInWishlist,
    search,
    setSearch,
    openModal,
  } = useGlobalContext();

  const navigate = useNavigate();

  const fetchMovies = async () => {
    const response = await GetMovies();
    setMovies(response ? response.Search : []);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovie = async () => {
    if (search.trim() !== "") {
      const response = await GetSearchMovies(search);
      setMovies(response ? response.Search : []);
    }
    else{
      fetchMovies();
    }
  };
  useEffect(() => {
    fetchMovie();
  }, [search]);

  const resetSearch = () => {
    fetchMovies();
  };

  return (
    <Layout>
      <Hero />

      <section className="flex flex-col justify-center items-center py-20 bg-white dark:bg-black font-poppins">
        <div className="mb-10 -mt-8">
          <form>
            <div className="group px-6 mx-4 py-2 text-sky-700 dark:text-sky-400 ">
              <input
                type="text"
                placeholder="Search Movies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-black  dark:text-sky-50 bg-transparent border-b border-gega-red dark:border-sky-400  focus:outline-none w-24 lg:w-48 transition duration-500 "
              />
              <button className="group-hover:ml-0 transition duration-500 ">
                <span className=" text-white dark:text-black group-hover:text-gega-red dark:group-hover:text-sky-400 transition duration-400 text-xl">
                  <FaSearchengin />
                </span>
              </button>
              <button
                className="group-hover:bg-red-200  dark:group-hover:bg-blue-100 transition duration-500 text-lg ml-2 rounded
                    px-3  text-gega-red dark:text-sky-500  text-semibold"
                onClick={resetSearch}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className=" bg-white dark:bg-black container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {movies && movies.length > 0 ? (
            movies.map((movie) => {
              const inWishlist = isMovieInWishlist(movie.imdbID);
              return (
                <div className="mx-auto">
                  <div className="group relative overflow-hidden cursor-pointer">
                    <img
                      src={movie.Poster}
                      className="group-hover:scale-110 group-hover:opacity-80 dark:group-hover:opacity-50 duration-500 rounded-sm "
                      alt={movie.Title}
                    />
                    <div className="absolute px-8 bottom-8">
                      <h2 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-5 font-poppins font-bold duration-500 text-xl">
                        {movie.Title.slice(0, 13)}
                        <span className="group-hover:text-green-500 ml-3">
                          {movie.Year}
                        </span>
                      </h2>

                      <p className="text-md opacity-0 group-hover:opacity-100 group-hover:mb-14 duration-500 text-gega-grey"></p>
                      <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-3 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                        <button
                          className="hover:text-gega-red hover:opacity-60 duration-500"
                          onClick={() => addToWishList(movie.imdbID)}
                        >
                          {inWishlist ? (
                            <FaHeart size={40} className="text-gega-red" />
                          ) : (
                            <FaRegHeart size={40} className="text-gega-red" />
                          )}
                        </button>
                        <button
                          className="text-cyan-700  hover:opacity-60 duration-500"
                          onClick={() => openModal(movie)}
                        >
                          <FiEye size={40} />
                        </button>
                        <button
                          className="text-cyan-700   hover:opacity-60 duration-500"
                          onClick={() =>
                            navigate(`${ROUTER.Detail}/${movie.imdbID}`)
                          }
                        >
                          <FaCircleChevronRight size={35} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gega-red text-4xl font-bold">Not Found...</p>
          )}
        </div>
      </section>
      <MovieModal />
    </Layout>
  );
};

export default Home;
