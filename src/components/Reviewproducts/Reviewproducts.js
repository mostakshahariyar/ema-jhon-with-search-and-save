import React from 'react';

const Reviewproducts = (props) => {
    const { name, price, quantity, key } = props.products;
    const { handelBtn } = props;
    return (
        <div className='product'>
            <div style={{ marginLeft: '10rem' }}>
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={ ()=>{handelBtn(key)} } className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default Reviewproducts;