"use client";
import { BookingContext } from "@/context/booking_context";
import React, { useContext } from "react";

const BookingBtn = ({ service }) => {
  const { bookings, addBooking, removeBooking } = useContext(BookingContext);
  const isAlreadyBooking = bookings?.find((b) => b._id === service._id);

  return (
    <div>
      <button
        onClick={() =>
          isAlreadyBooking ? removeBooking(service._id) : addBooking(service)
        }
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {isAlreadyBooking ? "Unbook Service" : "Book This Service"}
      </button>
    </div>
  );
};

export default BookingBtn;
