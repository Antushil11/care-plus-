import React from 'react';

const ServicesDetailpage = async({params}) => {

    const {slug} = await params
    return (
        <div>
            ServicesDetailpage{slug}
            
        </div>
    );
};

export default  ServicesDetailpage;