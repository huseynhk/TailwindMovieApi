import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetMovieForPage } from "../api/GetRequset";
import { ROUTER } from "../constant/Router";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Layout from "./layout/Layout";

const Detail = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState("");

  const fetchMovieDetail = async () => {
    const response = await GetMovieForPage(movieId);
    setMovieDetail(response);
  };
  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  return (
    <Layout>
      <section className="bg-white dark:bg-black py-6 ">
        {movieDetail ? (
          <div className="max-w-md  lg:max-w-3xl lg:flex font-poppins dark:bg-sky-100 border dark:border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 mx-auto">
            <img
              className="w-full lg:w-1/2  object-cover"
              src={movieDetail.Poster}
            />
            <div className="py-3 w-full lg:w-1/2  text-sky-100 dark:text-gray-800 flex flex-col items-center text-lg lg:text-xl" >
              <h3 className="text-red-100  dark:text-gega-red text-2xl lg:text-3xl mb-3 lg:mb-6">
                {movieDetail.Title.slice(0, 20)}
              </h3>
              <p>Year: {movieDetail.Year}</p>
              <p className="my-3 lg:my-6">Rated: {movieDetail.Rated}</p>
              <p>Released: {movieDetail.Released}</p>
              <p className= "text-green-300  dark:text-green-700 text-bold my-3 lg:my-6">
                Imdb: {movieDetail.imdbRating}
              </p>
              <p>Runtime: {movieDetail.Runtime}</p>
            
              <p className="my-3 lg:my-6">Genre: {movieDetail.Genre}</p>
              <p>Director: {movieDetail.Director}</p>
              <p className="my-3 lg:my-6">Plot: {movieDetail.Plot.slice(0, 20)}...</p>
              <button onClick={() => navigate(ROUTER.Home)} className="flex items-center justify-center mt-2 mb-3 lg:-mb-6 "  >
                <FaCircleChevronLeft
                  size={35}
                  className=" hover:text-sky-500 transition-all duration-500"
                />
               <span className="ml-2 text-lg text-sky-200 dark:text-sky-500 hover:opacity-80 transition-all duration-500" > Go Back</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-black h-[450px] w-full">
            <h1 className="text-gega-red text-4xl capitalize">not found</h1>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Detail;
