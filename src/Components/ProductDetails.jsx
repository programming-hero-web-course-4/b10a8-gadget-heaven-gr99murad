import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Heading from "./Heading";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { product_id } = useParams();
  const products = useLoaderData();
  const product = products.find(
    (item) => item.product_id === parseInt(product_id)
  );

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];

    setCartCount(cartItems.length);
    setIsInWishlist(
      wishlistItems.some((item) => item.product_id === product.product_id)
    );
  }, [product.product_id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (!cartItems.some((item) => item.product_id === product.product_id)) {
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartCount(cartItems.length);
      
      toast.success("Added to Cart");

      window.dispatchEvent(new Event ('storageUpdated'));
    } else {
      toast.info("Item already in cart");
    }
  };
  console.log(cartCount);

  const addToWishlist = () => {
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    if (!wishlistItems.some((item) => item.product_id === product.product_id)) {
      wishlistItems.push(product);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      setIsInWishlist(true);
      toast.success("Added to wishlist");

      window.dispatchEvent(new Event ('storageUpdated'));
    }
  };

  return (
    <div className="my-14" >
      <div className="bg-[#9538E2] pb-32 ">

      <Heading
      
      title="Product Details"
      subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      >

      </Heading>

      </div>
     
     
    <div className="card card-side bg-base-100 shadow-xl  -mt-32 ml-24 md:ml-40 lg:ml-72 mb-10 p-6 border rounded-2xl w-3/5">
      

      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>

      <figure>
        <img
          src={product.product_image}
          alt={product.product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.product_available}</p>
        <p>{product.description}</p>
        <p className="text-2xl font-bold">Specification:
          </p>
          <p>{product.Specification}</p>

          <p className="text-xl font-bold">Rating</p>

         <div className="flex gap-8">
         <ReactStars
            count={5}
            value={product.rating}
            size = {24}
            active color ="#ffd700"
            edit={false}
          
          ></ReactStars>

          <p>{product.rating}</p>
         </div>

        <div className="flex gap-4 flex-col md:flex-row ">
        <button onClick={addToCart} className="btn">
          Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
        </button>

        <button className="btn" onClick={addToWishlist} disabled={isInWishlist}>
          Add to Wishlist  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </button>
        </div>

      </div>
    </div>
     </div>
  );
};

export default ProductDetails;

