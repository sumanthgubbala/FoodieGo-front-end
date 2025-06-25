import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { GetRestaurantsByOwnerId } from '../utils/apis';
import { useNavigate } from 'react-router-dom';

const ManageRestaurant = () => {
    const ownerId = sessionStorage.getItem("userId");
    const [restaurantData, setRestaurantData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await GetRestaurantsByOwnerId(ownerId);
                setRestaurantData(response);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };
        fetchRestaurants();
    }, [ownerId]);

    return (
        <div>
            <NavBar />
            <div className='px-6 py-10'>
                <h1 className='text-3xl font-bold text-center mb-4'>Manage Your Restaurants</h1>
                <p className='text-center text-gray-600 mb-8'>
                    Here you can add, edit, or delete your restaurants.
                </p>

                <div className='mt-10'>
                    <h2 className='text-2xl font-semibold mb-5'>Your Restaurants</h2>
                    {restaurantData.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {restaurantData.map((restaurant, index) => (
                                <div key={index} className='border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-orange-200'>
                                    <img src={restaurant.imgUrl} alt={restaurant.name} className='w-full h-40 object-cover rounded-md mb-3' />
                                    <h3 className='text-xl font-bold mb-1'>{restaurant.name}</h3>
                                    <p className='text-gray-500 text-sm mb-2'>{restaurant.address}</p>
                                    <div className='flex justify-between mt-3'>
                                        <button  onClick={() => navigate(`/restaurant/edit/${restaurant.id}`)} className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded'>Edit</button>
                                        <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded'>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-gray-500'>No restaurants found.</p>
                    )}
                </div>

                <div className='text-center mt-16'>
                    <p className='text-lg'>Thank you for managing your restaurants with us!</p>
                    <p className='text-sm text-gray-500'>If you have any questions, please contact support.</p>
                </div>
            </div>
        </div>
    );
};

export default ManageRestaurant;
