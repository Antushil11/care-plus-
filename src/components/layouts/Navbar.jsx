"use client";
import React, { useContext } from "react";
import Logo from "../logo/Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import ContainerPage from "../container/page";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  const nav = (
    <div className="flex font-semibold">
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink href={"/testimonials"}>Testimonials</NavLink>
      </li>
    </div>
  );
  return (
    <ContainerPage>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Link href={"/"}>
                <Image
                  src="https://car-cleanify.vercel.app/assets/logo-BpOrj-RN.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px]"
                />
              </Link>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {status === "loading" ? (
            <button disabled>Loading ..</button>
          ) : session?.user?.email ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => signOut()}
                className=" btn btn-primary btn-outline"
              >
                Sign Out
              </button>
              <Link href={"/Dashboard"}>
                <button className="btn btn-primary btn-outline">
                  Dashboard
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <button
                onClick={() => signIn()}
                className="btn btn-primary btn-outline"
              >
                Login
              </button>
              <Link href="/signup">
                <button className="btn btn-primary btn-outline">
                  {" "}
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </ContainerPage>
  );
};

export default Navbar;
