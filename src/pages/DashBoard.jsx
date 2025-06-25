import React, { useEffect, useState } from 'react'
import { GetRestaurantsByOwnerId } from '../utils/apis';
import RestaurantCard from '../components/RestaurantCard';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const isOwner = sessionStorage.getItem("role") === "SERVICE"; // Check if user is an owner
    if (!isOwner) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-2xl font-bold'>Access Denied: You are not authorized to view this page.</h1>
            </div>
        );
    }
    // Dashboard content for owners
    // This can include restaurant management, order viewing, etc.
    const ownerId = sessionStorage.getItem("userId");
    useEffect(() =>{
        const fetchRestaurants = async () => {
            try {
                const response = await GetRestaurantsByOwnerId(ownerId);
                const data = response // Assuming the API returns an array of restaurants
                setRestaurantData(data);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };
        fetchRestaurants();
    })
  return (
    <>
        <NavBar />
    <div>
    
        <h1 className='text-3xl font-bold text-center my-10'>Welcome to the Dashboard</h1>
        <p className='text-center text-lg'>Here you can manage your restaurants, view orders, and more.</p>
        {/* Add more dashboard content here */}
        <div className='mt-10 px-6'>
            <h2 className='text-2xl font-semibold mb-5'>Your Restaurants</h2>
            {restaurantData.length > 0 ? (
                <div className='grid grid-cols-1 
                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        gap-7 mt-3
                        '>
                    {restaurantData.map((restaurant, index) => (
                        <Link to={`/orders-request?restaurantId=${restaurant.id}`} key={index} className='no-underline'>
                            <RestaurantCard key={index} restaurant={restaurant} />
                        </Link>
                    ))}
                </div>
            ) : (
                <p className='text-gray-500'>No restaurants found.</p>
            )}
            <p className='text-center mt-5'>You can add new restaurants or manage existing ones.</p> 
            <p className='text-center mt-2'>Use the navigation menu to access different sections of the dashboard.</p>
            </div>
        <div className='text-center mt-10'>
            <p className='text-lg'>Thank you for using our service!</p>
            <p className='text-sm text-gray-500'>If you have any questions, please contact support.</p>
            <p className='text-sm text-gray-500'>Happy managing!</p>
        </div>
    </div>
    </>
  )
}

export default DashBoard