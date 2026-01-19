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
        className="btn btn-primary btn-outline"
      >
        {isAlreadyBooking ? "Unbook Service" : "Book This Service"}
      </button>
    </div>
  );
};

export default BookingBtn;
