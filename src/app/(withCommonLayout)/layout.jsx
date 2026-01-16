"use client";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
