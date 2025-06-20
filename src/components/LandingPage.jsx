import React, { useState } from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
      <div className='p-10 flex justify-between items-center py-2 rounded-b-lg'>
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <IoFastFoodOutline className='text-orange-400' />
          <p>FoodieGo</p>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <a
            href="/login"
            className="inline-flex items-center rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Login
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
      <div className="h-screen bg-orange-500 mx-auto max-w-2xl flex flex-col justify-center items-center px-4 text-centerw-screen max-w-full h-screen bg-orange-500 flex flex-col justify-center items-center px-4 text-center overflow-hidden">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-black-600 ring-1 ring-black-900/10 hover:ring-gray-900/20 text-white">
            🍽️ Welcome to FoodieGo.
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white-900 sm:text-7xl text-white">
            Your favorite food, delivered fast and fresh
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8 text-grey">
            Skip the queue, skip the stress. With FoodieGo, you can browse local restaurants, discover top-rated dishes, and explore new tastes - all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage