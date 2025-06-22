import React, {useState, useContext, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setTotalPrice(totalPrice + item.price);
        setTotalItems(totalItems + 1);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        const removedItem = cartItems.find(item => item.id === itemId);
        setCartItems(updatedCart);
        setTotalPrice(totalPrice - (removedItem ? removedItem.price : 0));
        setTotalItems(totalItems - 1);
    };

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, totalItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
};