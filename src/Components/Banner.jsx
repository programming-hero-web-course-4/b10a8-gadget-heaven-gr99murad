import React from "react";
import Heading from "./Heading";

const Banner = () => {
  return (
    <div className="bg-[#9538E2] pb-72">
      <Heading
        title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Heading>
      <div className="hero">
        <button className="btn text-[#9538E2] ">Shop Now</button>
       
      </div>
    </div>
  );
};

export default Banner;
