import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [wishList, setWishList] = useState(
    localStorage.getItem("wishList")
      ? JSON.parse(localStorage.getItem("wishList"))
      : []
  );
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setShow(true);
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedMovie(null);
  };

  const addToWishList = (imdbID) => {
    const selectedMovie = movies.find((movie) => movie.imdbID === imdbID);
    const existedMovie = wishList.find((movie) => movie.imdbID === imdbID);

    const wishedMovies = existedMovie
      ? [...wishList]
      : [...wishList, selectedMovie];
    setWishList(wishedMovies);
    localStorage.setItem("wishList", JSON.stringify(wishedMovies));

    if (!existedMovie) {
      toast.success("Movie added successfully!", {
        autoClose: 1000,
      });
    } else {
      toast.info("Movie already added!", { autoClose: 1000 });
    }
  };

  const isMovieInWishlist = (imdbID) => {
    return wishList.find((movie) => movie.imdbID === imdbID);
  };

  const deleteFromWishList = (imdbID) => {
    const deletedMovie = wishList.filter((movie) => movie.imdbID !== imdbID);
    setWishList(deletedMovie);
    localStorage.setItem("wishList", JSON.stringify(deletedMovie));
    toast.success("Movie deleted successfully!", {
      autoClose: 1000,
    });
  };

  const contextValue = {
    movies,
    setMovies,
    addToWishList,
    isMovieInWishlist,
    wishList,
    setWishList,
    deleteFromWishList,
    search,
    setSearch,
    selectedMovie,
    openModal,
    closeModal,
    show
  };
  const Component = GlobalContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};

const useGlobalContext = () => useContext(GlobalContext);
export { GlobalContextProvider, useGlobalContext };
