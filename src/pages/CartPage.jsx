import React, { useEffect, useState } from 'react'
import { DeleteCartItem, GetCartItems, PlaceOrderByUserId, UpdateCartQuantity } from '../utils/apis';
import Cart from '../components/Cart';
import NavBar from '../components/NavBar';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchingCartItems = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
                if (!userId) {
                    console.error("User ID not found");
                    return;
                }
                const response = await GetCartItems(userId);
                if (response && Array.isArray(response)) {
                    setCartItems(response);
                } else {
                    console.error("Invalid response format:", response);
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchingCartItems();
    }, []);


    const removeFromCart = (itemId) => {
        console.log("Removing item with ID:", itemId);
        try {
            const response = DeleteCartItem(itemId);
            console.log("Item removed from cart:", response);
            setCartItems(prev => prev.filter(item => item.id !== itemId));
        } catch (error) {
            console.error("Error removing item from cart:", error.response?.data || error.message);
            alert("Failed to remove item from cart. Please try again.");
        }
    };
    const updateQuantity = (itemId, newQuantity) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity ,
                    price: item.price / item.quantity * newQuantity
                } : item
            )
        );
        console.log(`Updated item ${itemId} quantity to ${newQuantity}`);
        // Optional: Call API to persist change
        // await UpdateCartQuantity(itemId, newQuantity);
        const  response = UpdateCartQuantity(itemId, newQuantity);
        console.log("Item quantity updated in cart:", response);
    };

    const orderPlace = () => {
        // Logic to place the order
        console.log("Order placed with items:", cartItems);
        alert("Order placed successfully!");
        const response = PlaceOrderByUserId(sessionStorage.getItem('userId'));
        console.log("Order placed response:", response);
        setCartItems([]);
    };
    return (
        <div>
            <NavBar />
            <div className="maincart-cont">
                <h1 className="text-2xl font-bold text-center my-4">Your Cart</h1>
                <div className="max-w-2xl mx-auto">
                    {loading ? (
                        <p className="text-center text-gray-400">Loading...</p>
                    ) : cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty</p>
                    ) : (
                        <div>
                            {cartItems.map((item, index) => (
                                <Cart cartItem={item} key={index} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                            ))}
                        </div>
                    )
                    }
                </div>
            </div>
            <div className="text-center mt-6">
                <h1>CheckOut Summary</h1>
                <p className="text-gray-500">Total Items: {cartItems.length}</p>
                <p className="text-gray-500">Total Price: ₹ {cartItems.reduce((total, item) => total + item.price, 0)}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200"
                    onClick={orderPlace}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage