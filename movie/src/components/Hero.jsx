import React from "react";
import Batman from "../assets/imgs/batman.jpg";

const Hero = () => {
  return (
    <>
      <section className="h-96 lg:h-myHeight group relative">
        <img src={Batman} alt="Batman" className="h-full w-full object-cover" />
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gega-red  dark:to-blue-900">
          <div className="container pl-10 lg:pl-0">
            <h3 className="text-blue-100 dark:text-green-200 tracking-wider group-hover:mb-1 duration-500 text-bold capitalize ">
              romantic , drama , action , thriller , horror
            </h3>
            <h1 className="text-3xl lg:text-5xl text-rose-200 dark:text-blue-200 group-hover:mb-1 duration-500">
              Join Us
            </h1>
            <p className="hidden md:flex mt-3 mb-8 text-rose-200 dark:text-sky-200  group-hover:mb-4 duration-500 w-3/4 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at
              cumque maiores non consequatur veniam nesciunt mollitia! Sapiente
              culpa deleniti quis quam nam voluptas id, accusamus iure quisquam,
              officiis debitis iusto earum laudantium alias harum ad neque dolor
              ipsa non? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Sed hic culpa incidunt eveniet, reiciendis aperiam nihil
              nulla veniam maxime mollitia expedita natus cupiditate accusamus
              voluptas quasi dolore soluta consequuntur quaerat!
            </p>

            <p className="flex md:hidden mt-3 mb-5  pr-[6px]  text-rose-200 dark:text-sky-200  group-hover:mb-3 duration-500 w-full text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at
              cumque maiores non consequatur veniam nesciunt mollitia! Sapiente
              culpa deleniti quis quam nam voluptas id, accusamus iure quisquam,
              voluptas quasi dolore soluta consequuntur quaerat!
            </p>
            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-14 duration-1000"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
