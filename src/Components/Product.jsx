import React from "react";

const Product = ({product}) => {
  const { product_image, product_title,price } = product;

  return (
    
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <button className="btn text-[#9538E2] ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
