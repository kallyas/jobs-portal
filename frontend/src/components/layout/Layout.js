import React from "react";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="page-wrapper mm-page mm-slideout" id="mm-0">
      <span class="header-span"></span>
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
