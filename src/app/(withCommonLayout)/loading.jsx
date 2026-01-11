import ServicesSkeleton from '@/components/skeleton/ServicesSkeleton';
import React from 'react';

const loading = () => {
    
    return (
        <div>
            {[...Array(9)].map((_, index) =>(
                <ServicesSkeleton key={index}></ServicesSkeleton>
            ))}
            
        </div>
    );
};

export default loading;