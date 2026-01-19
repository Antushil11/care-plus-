"use client";

import React from "react";
import { motion } from "framer-motion";
import ContainerPage from "../container/page";

const doctorEnhancements = [
  {
    title: "Home Doctor Visits",
    description:
      "Qualified doctors visit your home for regular checkups, diagnosis, and consultations.",
  },
  {
    title: "Telemedicine",
    description:
      "Consult certified doctors online via video or chat for non-emergency medical advice.",
  },
  {
    title: "Specialist Consultation",
    description:
      "Get appointments with specialists like cardiologists, pediatricians, and more.",
  },
  {
    title: "24/7 Availability",
    description:
      "Access doctors anytime for urgent care, guidance, or medical support.",
  },
  {
    title: "Personalized Care Plans",
    description:
      "Doctors create personalized care plans based on your health needs.",
  },
];

const DoctorEnhancements = () => {
  return (
    <section className="py-16">
      <ContainerPage>
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Our Doctor Services
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover the key features and services we provide to ensure professional, reliable, and convenient medical care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorEnhancements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
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

export default DoctorEnhancements;
