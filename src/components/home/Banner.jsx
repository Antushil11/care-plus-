import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex  items-center'>
           <div className='flex-1 space-y-5 '>
            <h2 className=' text-6xl font-bold '>Connecting Families with Caring Hands and <span className='text-primary'>Kind Hearts</span></h2>
            <p className=''>Because Every Family Deserves Safe, Loving Care.</p>
            <button className='btn btn-primary btn-outline'>Expore Services</button>
           </div>
           <div className=''>
            <Image  alt='Loving Care' width={700} height={400} src={"/assets/banner.png"}></Image>
           </div>
        </div>
    );
};

export default Banner;