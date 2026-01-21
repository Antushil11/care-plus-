"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";


const isValidURL = (url) => {
  if (!url) return false;
  try {
    new URL(url.trim());
    return true;
  } catch {
    return false;
  }
};

const ServicesCard = ({ service }) => {
  const { name, category, description, pricePerHour, image } = service;
  const [showFullDesc, setShowFullDesc] = useState(false);

 
  const previewLength = 100;
  const shortDesc =
    description?.length > previewLength
      ? description.slice(0, previewLength) + "..."
      : description;

  
  const imageSrc = isValidURL(image)
    ? image.trim()
    : "/fallback-image.jpg"; 

  return (
    <div className="max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
      
      <Image
        src={imageSrc}
        alt={name}
        width={800}
        height={300}
        className="object-cover w-full h-48"
      />

      
      <div className="p-5 flex flex-col flex-1">
        <span className="text-sm text-secondary font-medium">{category}</span>
        <h2 className="text-xl font-semibold mt-1">{name}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 whitespace-pre-wrap break-words">
          {showFullDesc ? description : shortDesc}
        </p>

        {/* Read More / Read Less button */}
        {description?.length > previewLength && (
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-secondary text-sm mt-1 hover:underline self-start"
          >
            {showFullDesc ? "Read Less" : "Read More"}
          </button>
        )}

        {/* Footer: price + details link */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-primary">
            ৳{pricePerHour}/hour
          </p>

          <Link
            href={`/services/${service?._id}`}
            className="btn btn-primary btn-outline"
          >
            Service Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
