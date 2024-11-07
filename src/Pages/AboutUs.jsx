import React from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../Components/Heading";

const AboutUs = () => {
  const testimonial = useLoaderData();
  return (
    <div className=" my-10">
        <div className="bg-[#9538E2]">
        <Heading
        title="Our Story"
        subtitle="GadgetHaven started with a passion for bringing the latest and greatest tech to enthusiasts worldwide. Founded in 2022, we aim to provide high-quality gadgets with exceptional service."
      ></Heading>

      <Heading
        title="Our Mission & Vision"
        subtitle="Our mission is to deliver top-notch gadgets with unmatched variety and quality. We envision a world where tech is accessible to everyone, enhancing everyday life."
      ></Heading>


        </div>
      
      <div className="card mx-auto bg-base-10 w-full shadow-xl">
      <div >
        <Heading title="Customer Testimonial"></Heading>
        {testimonial.map((testimonial) => (
          <div className="flex gap-7 mx-20" key={testimonial.id}>
            <p className="">Feedback: {testimonial.feedback}</p>
            <h4 className="my-8">--{testimonial.name}</h4>
          </div>
        ))}
      </div>
      </div>

     
    </div>
  );
};

export default AboutUs;
