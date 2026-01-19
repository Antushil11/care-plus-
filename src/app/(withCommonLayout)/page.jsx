import ContainerPage from "@/components/container/page";
import Banner from "@/components/home/Banner";
import React from "react";
import Servicespage from "./services/page";
import AboutPage from "./about/page";
import TestimonialsPage from "@/components/home/testimonial";

import Enhancements from "@/components/home/Enhancements";
import DoctorServicePage from "@/components/home/DoctorServicePage";

const Homepage = () => {
  return (
    <div>
      <ContainerPage>
        <div className=" flex items-center justify-center font-bold text-5xl text-purple-500">
          <Banner></Banner>
        </div>
      </ContainerPage>
      <div className="mt-10">
        <DoctorServicePage></DoctorServicePage>
      </div>
      <div className="mt-10">
        <TestimonialsPage></TestimonialsPage>
      </div>
      

      <div className="mt-10">
        <AboutPage></AboutPage>
      </div>
      
     
      <div className="mt-10">
        <Enhancements></Enhancements>
      </div>
      
    </div>
  );
};

export default Homepage;
