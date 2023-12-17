import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Hero from "./Hero";
import { GetMovies, GetSearchMovies } from "../api/GetRequset";
import { useGlobalContext } from "../context/GlobalContext";
import { FaHeart, FaRegHeart, FaCircleChevronRight } from "react-icons/fa6";
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
    const response = await GetSearchMovies(search);
    setMovies(response ? response.Search : []);
  };
  useEffect(() => {
    fetchMovie();
  }, [search]);

  return (
    <Layout>
      <Hero />

      <section className=" py-24 bg-black font-poppins">
        <div className="bg-black  container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {movies && movies.length > 0 ? (
            movies.map((movie) => {
              const inWishlist = isMovieInWishlist(movie.imdbID);
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
                        <span className="group-hover:text-green-300 ml-2">
                          {movie.Year}
                        </span>
                      </h2>

                      <p className="text-md opacity-0 group-hover:opacity-100 group-hover:mb-14 duration-500 text-gega-grey"></p>
                      <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-3 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                        <button
                          className="hover:text-gega-red duration-500"
                          onClick={() => addToWishList(movie.imdbID)}
                        >
                          {inWishlist ? (
                            <FaHeart size={40} className="text-gega-red" />
                          ) : (
                            <FaRegHeart size={40} className="text-gega-red" />
                          )}
                        </button>
                        <button
                          className="hover:text-sky-300 duration-500"
                          onClick={() => openModal(movie)}
                        >
                          <FiEye size={40} />
                        </button>
                        <button
                          className="hover:text-sky-300 duration-500"
                          onClick={() =>
                            navigate(`${ROUTER.Detail}/${movie.imdbID}`)
                          }
                        >
                          <FaCircleChevronRight size={40} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gega-red text-4xl font-bold">Loading...</p>
          )}
        </div>

        <MovieModal />
      </section>
    </Layout>
  );
};

export default Home;
