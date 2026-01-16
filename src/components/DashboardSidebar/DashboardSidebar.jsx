import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-[200px] bg-accent h-screen px-3 py-4 fixed top-0 left-0'>
            <Link href={"/"}>Care Plus</Link>
            

            <div className='flex flex-col gap-2 mt-7'>
                <Link href={"/Dashboard/profile"}>Profile</Link>
                <Link href={"/Dashboard/my-booking"}>My Booking</Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;