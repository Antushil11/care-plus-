import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex  items-center bg-[#A4C0D6] rounded-4xl">
      <div className="flex-1 space-y-5 ml-6">
        <h2 className=" text-6xl font-bold text-white">
          Connecting Families with Caring Hands and{" "}
          <span className="text-primary">Kind Hearts</span>
        </h2>
        <p className="text-white">Because Every Family Deserves Safe, Loving Care.</p>
        <button className="btn btn-primary btn-outline">Expore Services</button>
      </div>
      <div className="">
        <Image
          alt="Loving Care"
          width={700}
          height={400}
          src={"/assets/banner.png"}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
