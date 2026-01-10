import React from "react";
import ServicesCard from "./_components/cards/ServicesCard";
import ContainerPage from "@/components/container/page";

const getAllServices = async () => {
  const res = await fetch("http://localhost:3000/api/server");

  const data = await res.json();

  return data;
};

const Servicespage = async () => {
  const services = await getAllServices();
  return (
    <div>
      <ContainerPage>
        <h2>Servicespage</h2>

        <div className="grid grid-cols-4">
          {services.map((service) => {
            return (
              <ServicesCard key={service._id} service={service}></ServicesCard>
            );
          })}
        </div>
      </ContainerPage>
    </div>
  );
};

export default Servicespage;
