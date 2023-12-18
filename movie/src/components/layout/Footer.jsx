import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="bg-white dark:bg-black dark:text-gega-grey ">
        <div className="container flex items-center justify-center px-24 md:flex-row md:px-10 lg:px-0 py-8 ">
          <div className="flex items-center justify-center flex-col">
            <p className="text-2xl lg:text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-700 to-gega-red dark:from-blue-500 dark:to-gega-grey">
              Movie App
            </p>
            <p className="text-lg text-semibold mt-2 text-sky-800 dark:text-sky-200">
              {date.getFullYear()}  No © COPYRIGHT
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
