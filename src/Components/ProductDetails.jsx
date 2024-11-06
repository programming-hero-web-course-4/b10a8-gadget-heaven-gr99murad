import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useCartWishlist } from "../Utility/CartWishlistContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const product = useLoaderData();
  const { addToCart, addToWishlist } = useCartWishlist();
  const [wishlisted, setWishlisted] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlist = () => {
    addToWishlist(product);
    setWishlisted(true);
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.product_image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-primary">Watch</button>
          <button onClick={handleWishlist} className="btn btn-primary" disabled={wishlisted}> <FontAwesomeIcon icon = {faHeart}></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
