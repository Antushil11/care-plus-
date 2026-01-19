"use client"; // Required for hooks like useState, useEffect

import React, { useState, useEffect } from "react";
import ServicesCard from "./_components/cards/ServicesCard";
import ContainerPage from "@/components/container/page";
import { getAllServices } from "@/services/servicesAction";

const Servicespage = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

 
  const filteredServices =
    category === "All"
      ? services
      : services.filter((s) => s.category === category);

  return (
    <ContainerPage>
      <h2 className="text-4xl font-bold  text-primary mb-6 text-center">Services</h2>

   
      <div className="mb-6">
        <label htmlFor="category" className="mr-2 font-medium">
          Filter by Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All</option>
          <option value="Baby Care">Baby Care</option>
          <option value="Elderly Service">Elderly Service</option>
          <option value="Sick People Service">Sick People Service</option>
        </select>
      </div>

      
      {loading ? (
       <p className="text-center"> <span className="loading loading-bars loading-lg"></span></p>
      ) : filteredServices.length === 0 ? (
        <p>
          No services found for{" "}
          <span className="font-semibold">{category}</span>
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <ServicesCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </ContainerPage>
  );
};

export default Servicespage;
