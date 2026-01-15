import ContainerPage from "@/components/container/page";
import Image from "next/image";
import React from "react";

const getSingleServices = async (id) => {
  const res = await fetch(`http://localhost:3000/api/server/${id}`);

  const data = await res.json();

  return data;
};

const ServicesDetailpage = async ({ params }) => {
  const { slug } = await params;

  const serviceRes = await getSingleServices(slug);

  console.log(serviceRes);
  return (
    <ContainerPage>
      <div className="max-w-7xl mx-auto p-8 font-sans">
        <h1 className="text-3xl font-bold mb-4">{serviceRes.name}</h1>
        <p className="font-semibold text-gray-600 mb-2">
          Category: {serviceRes.category}
        </p>
        <Image
          src={serviceRes.image}
          alt={serviceRes.name}
          width={1000}
          height={600}
          className="max-w-full"
        />
        <p className="text-gray-800 leading-relaxed mb-4">
          {serviceRes.description}
        </p>
        <p className="font-bold text-xl mb-4">
          Price per hour: ${serviceRes.pricePerHour}
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Book Service
        </button>
      </div>
    </ContainerPage>
  );
};

export default ServicesDetailpage;
