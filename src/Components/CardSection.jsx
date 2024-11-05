import { useEffect, useState } from "react";
import Product from "./Product";



const CardSection = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {

    fetch('./gadgets.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[]);

  
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center my-8">
        Explore Cutting-Edge Gadgets
      </h1>
      
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            products.map(product => <Product product ={product} key={product.product_id}></Product>)
        }
      </div>
    </div>
  );
};

export default CardSection;
