import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetMovieForPage } from "../api/GetRequset";
import { ROUTER } from "../constant/Router";
import { FaCircleChevronLeft } from "react-icons/fa6";

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
    <>
      <section className="bg-black py-14 ">
        {movieDetail ? (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <img
              className="rounded-t-lg w-full h-96 object-cover"
              src={movieDetail.Poster}
            />
            <div className="p-4 text-lg">
              <h3 className="text-gega-red text-3xl mb-3">
                {movieDetail.Title.slice(0, 20)}
              </h3>
              <p>Year: {movieDetail.Year}</p>
              <p>Rated: {movieDetail.Rated}</p>
              <p>Released: {movieDetail.Released}</p>
              <p>Runtime: {movieDetail.Runtime}</p>
              <p className="text-green-700 text-bold">
                Imdb: {movieDetail.imdbRating}
              </p>
              <p>Genre: {movieDetail.Genre}</p>
              <p>Director: {movieDetail.Director}</p>
              <p>Plot: {movieDetail.Plot.slice(0, 30)}...</p>
              <button onClick={() => navigate(ROUTER.Home)} className="flex items-center justify-center mt-2 -mb-2"  >
                <FaCircleChevronLeft
                  size={35}
                  className=" hover:text-sky-500 transition-all duration-500"
                />
               <span className="ml-2 text-lg text-sky-500 hover:opacity-80 transition-all duration-500" > Go Back</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="h-[450px] w-full">
            <h1 className="text-gega-red text-4xl capitalize">not found</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default Detail;
