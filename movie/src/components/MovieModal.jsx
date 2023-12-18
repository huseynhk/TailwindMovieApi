import React, { Fragment, useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Dialog, Transition } from "@headlessui/react";
import { GetMovieDetails } from "../api/GetRequset";

const MovieModal = () => {
  const { selectedMovie, show, closeModal } = useGlobalContext();
  const [movieDetail, setMovieDetail] = useState(null);

  const fetchMovieDetails = async () => {
    if (selectedMovie && selectedMovie.imdbID) {
      const response = await GetMovieDetails(selectedMovie.imdbID);
      setMovieDetail(response);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [selectedMovie]);
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md  text-left align-middle shadow-xl transition-all bg-gray-100">
                    <div className="flex flex-col items-center justify-center py-2 mx-auto  lg:py-0">
                      <div className="w-full  rounded-md md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-2 space-y-2  md:space-y-1 sm:p-4">
                          {movieDetail ? (
                            <div>
                              <img src={movieDetail.Poster} className="w-full rounded-md h-96 object-cover" />
                              <div className="my-2 text-primary font-poppins">
                                <h4 className="text-gega-red">
                                  {movieDetail.Title}
                                </h4>
                                <p>Year: {movieDetail.Year}</p>
                                <p>Imdb: {movieDetail.imdbRating}</p>
                                <p>Released: {movieDetail.Released}</p>
                                <p>Runtime: {movieDetail.Runtime}</p>
                                <p>Genre: {movieDetail.Genre}</p>
                                <p>Director: {movieDetail.Director}</p>
                                <p>Plot: {movieDetail.Plot.slice(0, 45)}...</p>
                              </div>
                            </div>
                          ) : (
                            <h3 className="text-gega-red mx-auto">
                              Loading...
                            </h3>
                          )}
                          <button
                            type="button"
                            className="focus:outline-none w-full text-white bg-sky-600 hover:opacity-80 transition-all duration-500  outline-0 font-medium rounded-md  px-4 py-1  text-md"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MovieModal;
