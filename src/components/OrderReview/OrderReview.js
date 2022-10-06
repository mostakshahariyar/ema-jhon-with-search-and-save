import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../Hooks/Hooks';
import useCart from '../Hooks/useCart';
import Reviewproducts from '../Reviewproducts/Reviewproducts';

const OrderReview = () => {
    const [products] = useProducts([]);
    const [cart, setCart] = useCart(products);
    const handelBtn = key => {
        const newCart = cart.filter(products => products.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    let navigate = useNavigate();
    const placeorder = () => {
        navigate("/placeorder")
        setCart([]);
        clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(products => <Reviewproducts
                        key={products.key}
                        products={products}
                        handelBtn={handelBtn}
                    ></Reviewproducts>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='btn-regular' onClick={placeorder} >Place orders</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;