import React, { Fragment, useState } from "react";
import Layout from "./layout/Layout";
import { useGlobalContext } from "../context/GlobalContext";
import { FaSearch, FaRegTrashAlt } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { MdHeartBroken } from "react-icons/md"

const WishList = () => {
  const {
    wishList,
    deleteFromWishList,
    showRmv,
    deletedMovie,
    openRmvModal,
    closeRmvModal,
  } = useGlobalContext();
  const [searchInput, setSearchInput] = useState("");

  const filteredWishList = wishList.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <Layout>
      <section className="py-20 bg-white  dark:bg-black flex flex-col justify-center items-center">
        <div className="mb-12 -mt-14">
          <form>
            <div className="group px-6 mx-4 py-2 text-sky-700 dark:text-sky-400 ">
              <input
                type="text"
                placeholder="Search Movies"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="text-black  dark:text-sky-50 bg-transparent border-b border-gega-red dark:border-sky-400  focus:outline-none w-24 lg:w-48 transition duration-500 "
              />
              <button className="group-hover:ml-0 transition duration-500 ">
                <span className=" text-white dark:text-black group-hover:text-gega-red dark:group-hover:text-sky-400 transition duration-400 text-xl">
                  <FaSearch />
                </span>
              </button>
            </div>
          </form>
        </div>

        {filteredWishList && filteredWishList.length > 0 ? (
          <div className="bg-white dark:bg-black container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {filteredWishList.map((movie) => {
              return (
                <div className="mx-auto" key={movie.imdbID}>
                  <div className="group relative overflow-hidden cursor-pointer">
                    <img
                      src={movie.Poster}
                      className="group-hover:scale-110 group-hover:opacity-50 duration-500 rounded-md h-96 w-72 object-fill"
                      alt={movie.Title}
                    />
                    <div className="absolute px-6 bottom-8">
                      <h2 className="text-gega-grey truncate group-hover:text-gega-melon group-hover:mb-6 font-poppins font-bold duration-500 text-xl">
                        {movie.Title}
                        <span className="group-hover:text-green-500 ml-2">
                          {movie.Year}
                        </span>
                      </h2>

                      <p className="text-md opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500 text-gega-grey">
                        <button
                          className="p-3 bg-red-600 rounded-md hover:bg-gega-red duration-500 "
                          onClick={() => openRmvModal(movie)}
                        >
                          <FaRegTrashAlt />
                        </button>
                      </p>
                      <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-3 group-hover:bottom-2 group-hover:opacity-100 duration-500"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-[550px] flex justify-center">
             <MdHeartBroken className="text-gega-red dark:text-cyan-300 text-[20rem]"/>
          </div>
        )}
      </section>

      {/* HeadlessUI Modal */}
      <Transition appear show={showRmv} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeRmvModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Confirm Delete
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete{" "}
                      <span className="font-bold">{deletedMovie?.Title}</span>{" "}
                      from your wish list?
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end gap-4">
                    <button
                      className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                      onClick={closeRmvModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      onClick={() => {
                        deleteFromWishList(deletedMovie?.imdbID);
                        closeRmvModal();
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};

export default WishList;
