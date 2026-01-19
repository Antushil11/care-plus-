import ContainerPage from "@/components/container/page";
import Banner from "@/components/home/Banner";
import React from "react";
import Servicespage from "./services/page";
import AboutPage from "./about/page";


const Homepage = () => {
  return (
    <div>
      <ContainerPage>
        <div className=" flex items-center justify-center font-bold text-5xl text-purple-500">
          <Banner></Banner>
        
        </div>
       
        
  
        
      </ContainerPage>
       <AboutPage></AboutPage>
    </div>
  );
};

export default Homepage;
