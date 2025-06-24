import React from 'react';
import { DeleteCartItem } from '../utils/apis';

const Cart = ({ cartItem, removeFromCart, updateQuantity }) => {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                    <img
                        src={cartItem.imgUrl}
                        alt={cartItem.menuItemName}
                        className="w-16 h-16 rounded-md mr-4"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{cartItem.menuItemName}</h2>
                        <p className="text-gray-500">{cartItem.restaurantName}</p>
                        <div className="flex items-center mt-2">
                            <span className="text-gray-600">Price: </span>
                            <span className="text-red-600 font-semibold ml-1">₹ {cartItem.price}</span>
                            <input
                                type="number"
                                value={cartItem.quantity}
                                min="1"
                                className="ml-4 w-16 p-1 border rounded-md text-center"
                                onChange={(e) => {
                                    const newQuantity = parseInt(e.target.value, 10);
                                    if (newQuantity > 0) {
                                        updateQuantity(cartItem.id, newQuantity);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="hover:text-orange-500 hover:bg-white text-white font-semibold cursor-pointer border p-2 rounded-lg bg-orange-400"
                    onClick={() => removeFromCart(cartItem.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Cart;
