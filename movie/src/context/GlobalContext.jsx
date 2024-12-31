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
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showRmv, setShowRmv] = useState(false);
  const [deletedMovie, setDeletedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const openModal = (movie) => {
    setShow(true);
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedMovie(null);
  };

  const openRmvModal = (movie) => {
    setShowRmv(true);
    setDeletedMovie(movie);
  };

  const closeRmvModal = () => {
    setShowRmv(false);
    setDeletedMovie(null);
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

  const signIn = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
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
    show,
    showRmv,
    deletedMovie,
    openRmvModal,
    closeRmvModal,
    user,
    signIn,
    signOut,
    loading,
    setLoading,
  };
  const Component = GlobalContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};

const useGlobalContext = () => useContext(GlobalContext);
export { GlobalContextProvider, useGlobalContext };
