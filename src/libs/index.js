"use client";
import BookingContextProvider from "@/context/booking_context";
import UserContextProvider from "@/context/user_context";
import React from "react";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return (
    <div>
      <SessionProvider >
        <UserContextProvider>
          <BookingContextProvider>{children}</BookingContextProvider>
        </UserContextProvider>
      </SessionProvider>
    </div>
  );
};

export default Providers;
