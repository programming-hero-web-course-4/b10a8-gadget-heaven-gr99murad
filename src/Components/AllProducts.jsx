import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';



const AllProducts = () => {
    const productsData = useLoaderData()

    const { category } = useParams()

    const [cards, setCards] = useState([])

    useEffect(() => {

        if (category) {
            const filteredByCategory = [...productsData].filter(card => (card.category === category))
            setCards(filteredByCategory)
        }
        else{
            setCards(productsData)
        }

    }, [category, productsData])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {cards.map(product => (
                <Product key={product.product_id} product={product}></Product>
            ))}
        </div>
    );
};

export default AllProducts;