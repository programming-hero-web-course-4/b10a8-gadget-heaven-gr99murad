import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const navbarStyle = location.pathname === "/" ? "bg-[#9538E2]" : "bg-white";

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      console.log(cart);
      const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
      setCartItems(cart);
      setCartCount(cart.length);
      setWishlistCount(wishlist.length);
    };
    updateCounts();
    

    // add an event listener for storage change

    const handleStorageChange = () =>{
      updateCounts();
    };

    window.addEventListener('storageUpdated',handleStorageChange);

    return () => {
      window.removeEventListener('storageUpdated',handleStorageChange);
    }
  }, []);
  console.log(cartCount);
  // console.log(wishlistCount);

  const subtotal = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  return (
    <div className={`navbar fixed top-0 z-10 w-full items-center  ${navbarStyle}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                  : "hover:text-orange-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                  : "hover:text-orange-500"
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                  : "hover:text-orange-500"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                  : "hover:text-orange-500"
              }
            >
              About Us
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5  ">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                : "hover:text-orange-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                : "hover:text-orange-500"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                : "hover:text-orange-500"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                : "hover:text-orange-500"
            }
          >
            About Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <NavLink to="/dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {cartCount}
                    </span>
                  </NavLink>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{cartItems.length}</span>
                  <span className="text-info">Subtotal: ${subtotal}</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn btn-ghost btn-circle">
          <div className="indicator">
            <NavLink to="/dashboard">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <span className="badge badge-sm indicator-item">
                {wishlistCount}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
