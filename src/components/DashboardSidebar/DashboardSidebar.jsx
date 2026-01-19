import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-[200px] bg-[#A4C0D6] h-screen px-3 py-4 fixed top-0 left-0'>
            <Link className='text-2xl font-bold text-primary text-center' href={"/"}>Care Plus</Link>
            

            <div className='flex flex-col gap-2 mt-7'>
                <Link className='btn btn-outline  ' href={"/Dashboard/profile"}>Profile</Link>
                <Link className='btn btn-outline ' href={"/Dashboard/my-booking"}>My Booking</Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;