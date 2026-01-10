import React from "react";
import service from "@/data/boby.json";
import ServicesCard from "../../app/(withCommonLayout)/services/_components/cards/ServicesCard";

const services = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Services</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4 ">
        {service.map((servic) => (
          <ServicesCard key={servic.name} service={servic}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default services;
