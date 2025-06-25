import React, { useEffect, useState } from "react";
import { getAllOrdersByUserId } from "../utils/apis";
import NavBar from "../components/NavBar";

const MyOrder = () => {
    const userId = sessionStorage.getItem('userId');

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (!userId) {
                    console.error("User ID not found in session");
                    return;
                }
                const response = await getAllOrdersByUserId(userId);
                console.log("Fetched orders:", response);
                setOrders(response);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []); // Important: run only once on mount

    if (!userId) {
        return <div className="text-center mt-10 text-red-600">Please log in to view your orders.</div>;
    }

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">My Orders</h1>
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : orders.length > 0 ? (
                    <ul className="space-y-6">
                        {orders.map((batch) => (
                            <li key={batch.batchOrderId} className="border p-4 rounded-lg shadow-md bg-white">
                                <h2 className="text-lg font-semibold text-blue-600">
                                    Batch Order ID: {batch.batchOrderId}
                                </h2>
                                <p className="text-gray-700">Order Status:
                                    <span className={`ml-1 font-semibold ${batch.orderStatus === 'PLACED' ? 'text-green-600' : 'text-red-600'}`}>
                                        {batch.orderStatus}
                                    </span>
                                </p>
                                <p className="text-gray-500 mb-2">Total Amount: ₹ <span className="text-orange-500 mb-2">{batch.totalAmount}</span> </p>
                                {batch.orders.map((order, index) => (
                                    <div key={index} className="mt-4 border-t pt-3">
                                        <h3 className="text-md font-semibold text-gray-800">
                                            Restaurant ID: {order.restaurantId}
                                        </h3>
                                        <p className="text-gray-600">Order Total: ₹{order.orderTotal}</p>

                                        <ul className="ml-4 mt-2 space-y-2">
                                            {order.items.map((item, index) => (
                                                <li key={index} className="flex items-center justify-between border p-2 rounded-md shadow-sm">
                                                    <div className="flex items-center space-x-3">
                                                        <img
                                                            src={item.imgUrl}
                                                            alt={item.name}
                                                            className="w-14 h-14 object-cover rounded-md"
                                                        />
                                                        <div>
                                                            <p className="font-medium">{item.name}</p>
                                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                                        </div>
                                                    </div>
                                                    <span className="font-semibold text-gray-700">₹{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-600">No orders found.</p>
                )}
            </div>
        </>
    );
};

export default MyOrder;
