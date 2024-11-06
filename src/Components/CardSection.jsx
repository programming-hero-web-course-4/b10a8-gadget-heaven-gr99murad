import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const CardSection = () => {

  const data = useLoaderData()
  const {category} = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filteredByCategory = category
     ? data.filter((product) => product.category === category) 
     : data;
    
    setProducts(filteredByCategory);
  },[category,data])
  
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {
        products.map((product) => (
          <Product key={product.product_id} product={product}></Product>

        ))}
      
    </div>
  );
};

export default CardSection;