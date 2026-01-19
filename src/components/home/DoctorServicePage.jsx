"use client";

import React from "react";
import Image from "next/image";
import ContainerPage from "../container/page";

const doctorServices = [
  {
    id: 1,
    title: "Home Doctor Visits",
    description:
      "Qualified doctors visit your home for regular checkups, diagnosis, and consultations.",
    image: "https://i.ibb.co.com/sSBzZdS/images-q-tbn-ANd9-Gc-QT3ln-7viy3cn-Tfhi1v-EYGF1-UTY-ss-IIGXsg-s.jpg",
    link: "/services/home-doctor",
  },
  {
    id: 2,
    title: "Telemedicine",
    description:
      "Consult certified doctors online via video or chat for non-emergency medical advice.",
    image: "https://i.ibb.co.com/W46JX9qk/images-q-tbn-ANd9-Gc-SJu17-R4o-Qe-Ksx-S-36-Ca-SWQOul-Tp-Ob26smf-Q-s.jpg",
    link: "/services/telemedicine",
  },
  {
    id: 3,
    title: "Specialist Consultation",
    description:
      "Get appointments with specialists like cardiologists, pediatricians, and more.",
    image: "https://i.ibb.co.com/VcjJHbTM/images-q-tbn-ANd9-Gc-Qpy-4-Mm-Pz-M3-Q0xuh-Fvhcbpfzw-fbr-Yta8-W1w-s.jpg",
    link: "/services/specialist-consultation",
  },
];

const DoctorServicePage = () => {
  return (
    <div className="">
     

      <ContainerPage>
        {/* About Section */}
      <section className=" text-center">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our doctor services ensure that you and your loved ones receive timely and professional medical care. We combine convenience with quality, offering home visits, online consultations, and access to top specialists.
        </p>
      </section>

      {/* Doctor Services Cards */}
      <section className="mt-10">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          Our Doctor Services
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {doctorServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      </ContainerPage>
    </div>
  );
};

export default DoctorServicePage;
