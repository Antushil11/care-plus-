import Image from "next/image";
import React from "react";
import Link from "next/link";

const ServicesCard = ({ service }) => {
  const { name, category, description, pricePerHour, image } = service;
  return (
    <div className="max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        width={800}
        height={300}
        className="object-cover"
      />

      <div className="p-5">
        <span className="text-sm text-blue-600 font-medium">{category}</span>

        <h2 className="text-xl font-semibold mt-1">{name}</h2>

        <p className="text-gray-600 text-sm mt-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-green-600">
            ৳{pricePerHour}/hour
          </p>

          <Link href={`/services/${service?._id}`} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
             Service Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
