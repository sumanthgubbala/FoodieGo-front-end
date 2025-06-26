import React, { useEffect, useState } from 'react'
import { GetRestaurants } from '../utils/apis';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const fetchRestaurants = async () => {
            const response = await GetRestaurants();
            setRestaurants(response);
        }
        fetchRestaurants();
    },[]);
    console.log(restaurants);
    return (
        <div className='mt-5 px-6'>
            <h2 className='font-bold text-2xl'>Popular Restaurant</h2>
            <div className='grid grid-cols-1 
                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        gap-7 mt-3
                        '>
                {restaurants.length > 0 ? (
                restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant = {restaurant}/>
                ))
            ) : (
                <p className='w-full items-center  text-primary font-medium text-center'>No Restaurants found</p>
            )
            }
            </div>
            
        </div>
    )
}

export default RestaurantList