/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 6, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:Layout Created successfully.
*/
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
