import BookingContextProvider from "@/context/booking_context";
import UserContextProvider from "@/context/user_context";
import React from "react";

const Providers = ({ children }) => {
  return (
    <div>
      <UserContextProvider>
        <BookingContextProvider>{children}</BookingContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default Providers;
