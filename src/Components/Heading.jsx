import React from "react";


const Heading = ({ title, subtitle}) => {
  return (


    <div className="hero ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-2xl text-white font-bold">{title}</h1>
      <p className="py-6 text-white">
      {subtitle}
      </p>
      
    </div>
  </div>
</div>
    

    
     
     
  );
};

export default Heading;
