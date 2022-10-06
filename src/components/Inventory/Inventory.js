import React from 'react';
import useProducts from '../Hooks/Hooks';

const Inventory = () => {
    const products = useProducts();
    console.log(products)
    return (
        <div>
            <h2>This is Inventory page</h2>

        </div>
    );
};

export default Inventory;