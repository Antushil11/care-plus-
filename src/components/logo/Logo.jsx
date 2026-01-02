import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          alt="logo"
          src={"/assets/logo.png"}
          width={80}
          height={70}
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;
