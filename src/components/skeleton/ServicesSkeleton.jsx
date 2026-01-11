import React from "react";

const ServicesSkeleton = () => {
  return (
    <div>
      <div className="flex max-w-full flex-col gap-6 ml-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default ServicesSkeleton;
