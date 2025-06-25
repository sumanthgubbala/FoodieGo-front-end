import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { GetOrderRequests } from '../utils/apis';
import { useSearchParams } from 'react-router-dom';

const OrderRequests = () => {
    const [orderRequests, setOrderRequests] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const fetchOrderRequests = async () => {
            try {
                // Fetch order requests from the API
                const restaurantId = searchParams.get("restaurantId");
                const response = await GetOrderRequests(restaurantId);
                setOrderRequests(response);
            } catch (error) {
                console.error("Failed to fetch order requests:", error);
            }
        };
        fetchOrderRequests();
    }, []);

    const handleAccept = (orderId) => {
        alert(`Accepted order ${orderId}`);
        // Call accept API if available
    };

    const handleReject = (orderId) => {
        alert(`Rejected order ${orderId}`);
        // Call reject API if available
    };

    return (
        <div>
            <NavBar />
            <div className='px-6 py-10'>
                <h1 className='text-3xl font-bold text-center mb-4'>Order Requests</h1>
                <p className='text-center text-gray-600 mb-8'>
                    Here you can view and manage all order requests.
                </p>

                <div className='mt-10'>
                    <h2 className='text-2xl font-semibold mb-5'>Pending Orders</h2>
                    {orderRequests.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {orderRequests.map((order, index) => (
                                <div key={index} className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-orange-100'>
                                    <h3 className='text-xl font-bold mb-2'>Order #{order.orderId}</h3>
                                    <p className='text-sm text-gray-700'><strong>Customer:</strong> {order.customerName ?? "Guest User"}</p>
                                    <p className='text-sm text-gray-700'><strong>Address:</strong> {order.deliveryAddress}</p>
                                    <p className='text-sm text-gray-700'><strong>Status:</strong> {order.orderStatus}</p>
                                    <p className='text-sm text-gray-700'><strong>Total:</strong> ₹{order.totalAmount}</p>

                                    {/* Order Items */}
                                    <div className='mt-4'>
                                        <h4 className='font-semibold text-gray-800 mb-2'>Items:</h4>
                                        <div className='space-y-2 max-h-40 overflow-y-auto pr-2'>
                                            {order.orderItems.map((item, i) => (
                                                <div key={i} className='flex gap-3 items-center border-b pb-2'>
                                                    <img src={item.imgUrl} alt={item.name} className='w-12 h-12 object-cover rounded' />
                                                    <div className='text-sm'>
                                                        <p className='font-medium'>{item.name}</p>
                                                        <p className='text-gray-600'>Qty: {item.quantity} | ₹{item.price}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='flex justify-between mt-4'>
                                        <button
                                            onClick={() => alert(JSON.stringify(order, null, 2))}
                                            className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded'
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleAccept(order.orderId)}
                                            className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded'
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(order.orderId)}
                                            className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-gray-500'>No pending orders found.</p>
                    )}
                </div>

                <div className='text-center mt-16'>
                    <p className='text-lg'>Thank you for managing your orders with us!</p>
                    <p className='text-sm text-gray-500'>If you have any questions, please contact support.</p>
                </div>
            </div>
        </div>
    );
};

export default OrderRequests;
