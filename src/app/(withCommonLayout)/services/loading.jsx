import ContainerPage from "@/components/container/page";
import ServicesSkeleton from "@/components/skeleton/ServicesSkeleton";
import React from "react";

const loading = () => {
  return (
    <ContainerPage>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 ">
        {[...Array(9)].map((_, index) => (
          <ServicesSkeleton key={index}></ServicesSkeleton>
        ))}
      </div>
    </ContainerPage>
  );
};

export default loading;
