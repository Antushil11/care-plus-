"use client";

import React from "react";
import { motion } from "framer-motion";
import ContainerPage from "../container/page";

const enhancementsData = [
  {
    title: "Animations on Scroll",
    description:
      "Elements appear smoothly as you scroll down the page using fade or slide effects.",
  },
  {
    title: "Hover Effects",
    description:
      "Buttons and cards scale, change color, or add shadows when hovered for a modern feel.",
  },
  {
    title: "Gradient Backgrounds",
    description:
      "Add colorful gradients to sections, buttons, or cards to make your site vibrant.",
  },
  {
    title: "Interactive Cards",
    description:
      "Cards that flip, tilt, or animate when hovered improve user engagement.",
  },
  {
    title: "Smooth Scroll & Parallax",
    description:
      "Create smooth scrolling and parallax effects for a dynamic experience.",
  },
];

const Enhancements = () => {
  return (
    <section className="">
      <ContainerPage>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Enhancements & Features
          </h1>
          <p className="text-gray-600 mt-4">
            Discover the interactive and modern features added to make your experience smooth and engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancementsData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </ContainerPage>
    </section>
  );
};

export default Enhancements;
