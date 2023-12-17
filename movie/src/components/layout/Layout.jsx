import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-black" >{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
