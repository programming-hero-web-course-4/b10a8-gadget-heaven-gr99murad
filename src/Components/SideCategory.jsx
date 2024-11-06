import React from "react";
import { NavLink } from "react-router-dom";

const SideCategory = ({categories}) => {
  return (
    <div className=" lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content w-80 p-4">
            <NavLink to="/" className={({isActive}) => 
       isActive ? ' bg-blue-500 font-semibold border-b-2 border-blue-500 btn' : 'hover:text-blue-500 btn'} >All Products</NavLink>
         {categories.map((category) =>(
             <NavLink key={category.id} to={`/category/${category.category}`} className={({isActive}) => 
                isActive ? 'bg-blue-500 font-semibold border-b-2 border-blue-500 btn' : 'hover:text-blue-500 btn'}>{category.category}</NavLink>

         ))}
           
         
         
        </ul>
      </div>
    </div>
  );
};

export default SideCategory;
