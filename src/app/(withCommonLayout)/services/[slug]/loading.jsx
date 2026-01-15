import ContainerPage from "@/components/container/page";
import ServicesSkeleton from "@/components/skeleton/ServicesSkeleton";
import React from "react";

const loading = () => {
  return (
    <ContainerPage>
      <div className="max-w-4xl  mx-auto p-8 font-sans">
        {[...Array(1)].map((_, index) => (
          <ServicesSkeleton key={index}></ServicesSkeleton>
        ))}
      </div>
    </ContainerPage>
  );
};

export default loading;
