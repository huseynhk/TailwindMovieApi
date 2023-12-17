import React from "react";
import Layout from "./layout/Layout";
import { useGlobalContext } from "../context/GlobalContext";

const WishList = () => {
  const { wishList, deleteFromWishList } = useGlobalContext();

  return (
    <Layout>
      <section className="py-20 bg-black ">
        <div className="bg-black  container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {wishList && wishList.length > 0 ? (
            wishList.map((movie) => {
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

                      <p className="text-md opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                        <button
                          className="px-3 py-1 bg-indigo-500 rounded-md hover:bg-gega-red duration-500 "
                          onClick={() => deleteFromWishList(movie.imdbID)}
                        >
                          Remove From WishList
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
              <h1 className="text-gega-red text-4xl capitalize"  >your wishList is empty</h1>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WishList;
