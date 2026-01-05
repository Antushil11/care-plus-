import React from 'react';

const ServiceDetailspage = async ({params}) => {
  const {id} = await params;
  console.log(id)
  return (
    <div>
      services
      
    </div>
  );
};

export default ServiceDetailspage;