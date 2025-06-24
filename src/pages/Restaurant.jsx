import React, { useEffect, useState } from 'react'
import { GetRestaurants } from '../utils/apis';
import RestaurantCard from '../components/RestaurantCard';

const Restaurant = () => {
        const [restaurants, setRestaurants] = useState([]);
        useEffect(() => {
            const fetchRestaurants = async () => {
                const response = await GetRestaurants();
                setRestaurants(response);
            }
            fetchRestaurants();
        },[]);

    return (
        <div className='h-full'>
            {restaurants.length > 0  ?(
                restaurants.map((restaurant,index)=>{
                    <RestaurantCard key={index} restaurant = {restaurant}/>
                })
            ):
            ( <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className=" font-semibold text-gray-600 text-9xl">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
            )}
        </div>
    )
}

export default Restaurant