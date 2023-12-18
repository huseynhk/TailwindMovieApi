import React from "react";
import Batman from "../assets/imgs/batman.jpg";

const Hero = () => {
  return (
    <>
      <section className="h-96 lg:h-myHeight group relative">
        <img src={Batman} alt="Batman" className="h-full w-full object-cover" />
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gega-red  dark:to-blue-900">
          <div className="container pl-10 lg:pl-0">
            <h3 className="text-red-200 dark:text-green-300 tracking-wider group-hover:mb-1 duration-500 text-semibold capitalize ">
              action , drama , thriller , horror
            </h3>
            <h1 className="text-4xl lg:text-6xl text-blue-200 group-hover:mb-1 duration-500">
              Join Us
            </h1>
            <p className="my-6 text-sky-200 group-hover:mb-4 duration-500 w-full lg:w-3/4 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at
              cumque maiores non consequatur veniam nesciunt mollitia! Sapiente
              culpa deleniti quis quam nam voluptas id, accusamus iure quisquam,
              officiis debitis iusto earum laudantium alias harum ad neque dolor
              ipsa non?
            </p>
            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-14 duration-1000"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
