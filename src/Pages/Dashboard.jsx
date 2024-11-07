import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import image from '../assets/Group.png';
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  // final price state
  const [finalPrice, setFinalPrice] = useState(0);

  // calculate total price

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    setCartItems(cart);
    setWishlistItems(wishlist);
  }, []);

  // purchases function
  const handlePurchase = () => {
    setFinalPrice(totalPrice);
    setIsModalOpen(true);
    localStorage.setItem("cartItems", JSON.stringify([]));
    setCartItems([]);


    window.dispatchEvent(new Event ('storageUpdated'));
  };

  const handleSortByPrice = () => {
    const sortedCart = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedCart);
  };
// remove cart item
  const removeItemCart = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product_id !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Remove cart item");

    window.dispatchEvent(new Event ('storageUpdated'));
  };
//  remove wishlist item
  const removeItemWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.product_id !== productId
    );
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
    toast.success("Remove Wishlist Item");

    window.dispatchEvent(new Event ('storageUpdated'));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  return (
    <div className="my-14">
      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
      <div className="bg-[#9538E2] mb-10">
        <Heading
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>

        <div className="flex gap-5 justify-center pb-5">
          <button
            className={`btn ${
              activeTab === "cart"
                ? "text-[#9538E2] "
                : " text-white bg-[#9538E2]"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Cart
          </button>
          <button
            className={`btn ${
              activeTab === "wishlist"
                ? "text-[#9538E2] "
                : " text-white bg-[#9538E2]"
            }`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* cart section */}

      {activeTab === "cart" && (
        <div>
          <div className="flex justify-end gap-4">
            <div className="mt-3 font-bold">Total Price: ${totalPrice}</div>
            <button onClick={handleSortByPrice} className="btn mb-3 ">
              Sort By price
            </button>

            <button
              onClick={handlePurchase}
              disabled={cartItems.length === 0 || totalPrice === "0.00"}
              className="btn bg-[#9538E2]"
            >
              Purchase
            </button>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.product_id}
                className="card card-side bg-base-100 shadow-xl mx-20 my-20"
              >
                <figure className="w-48 rounded-lg ">
                  <img src={item.product_image} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.product_title}</h2>
                  <p>{item.description}</p>
                  <p className="font-bold">Price:${item.price}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => removeItemCart(item.product_id)}
                      className="btn"
                    >
                      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}

      {/* wishlist  */}
      {activeTab === "wishlist" && (
        <div>
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div
              key={item.product_id}
              className="card card-side bg-base-100 shadow-xl mx-20 my-20"
            >
              <figure className="w-48 rounded-lg ">
                <img src={item.product_image} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.product_title}</h2>
                <p>Description:{item.description}</p>
                <p className="font-bold">Price:${item.price}</p>
                <button className="btn bg-[#9538E2] text-white  lg:w-1/5">
                  Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
                </button>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => removeItemWishlist(item.product_id)}
                    className="btn"
                  >
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
            ))
          ) : (
            <p>Your Wishlist is empty</p>
          )}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-box bg-white p-6 rounded-lg shadow-lg text-center max-w-md ">
            <img className="mx-auto" src={image} alt="" />
            <h2 className="text-2xl font-bold text-[#9538E2]">
              Payment Successfully
            </h2>
            <p>Thanks for purchasing.</p>
            <p>Total: ${finalPrice}</p>
            <button onClick={closeModal} className="btn w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
