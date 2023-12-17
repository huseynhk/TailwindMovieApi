import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="bg-black text-gega-grey ">
        <div className="container flex items-center justify-center px-24 md:flex-row md:px-10 lg:px-0 py-8 ">
          <div className="flex items-center justify-center flex-col">
            <a
              href="#"
              className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
            >
              Movie App
            </a>
            <p className="text-sm mt-2">
              {date.getFullYear()} Movie App No © COPYRIGHT
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
