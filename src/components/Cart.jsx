import React, { useContext } from 'react';
import {useCart} from './CartContext';
import NavBar from './NavBar';
const Cart = () => {
    const { cartItems, totalPrice, totalItems } = useCart();
    return (
        <>
        <NavBar/>
           <div className="maincart-cont">
            <h1 className="text-2xl font-bold text-center my-4">Your Cart</h1>
            <div className="max-w-2xl mx-auto">
                {
                    cartItems.length == 0 ? (
                        <div className="text-center text-gray-500">
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {
                                cartItems.map((item, key) => (
                                    <div key={key} className="flex justify-between items-center p-4 border-b">
                                        <div className="flex items-center">
                                            <img src={item.imgUrl} alt={item.name} className="w-16 h-16 rounded-md mr-4" />
                                            <div>
                                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                                <p className="text-gray-500">{item.restaurantName}</p>
                                                <p className="text-gray-700">₹ {item.price}</p>
                                            </div>
                                        </div>
                                        <button className="text-red-500 hover:text-red-700" onClick={() => item.removeFromCart(item.id)}>
                                            Remove
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div > 
        </>
    );
};

export default Cart;

