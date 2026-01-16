"use client";

import ServicesCard from "@/app/(withCommonLayout)/services/_components/cards/ServicesCard";
import { BookingContext } from "@/context/booking_context";
import React, { useContext } from "react";

const MyBookings = () => {
  const { bookings, addBooking, removeBooking } = useContext(BookingContext);
  console.log(bookings);

  return <div>

    {bookings?.length == 0? <h2 className="font-bold text-2xl text-primary text-center">No Bookings</h2>:<div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
              {bookings.map((service) => {
                return (
                  <ServicesCard key={service._id} service={service}></ServicesCard>
                );
              })}
            </div>}
  </div>;
};

export default MyBookings;
