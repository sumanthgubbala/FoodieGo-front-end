import React from 'react'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const IconButtons = () => {
    return (
        <div className="flex gap-4">
            {/* Search Button */}
            <button className="p-3 rounded-full bg-gray-100 hover:bg-orange-500 transition duration-300">
                <CiSearch className="text-xl text-gray-800 hover:text-white transition duration-300" />
            </button>

            {/* Cart Button */}
            <button className="p-3 rounded-full bg-gray-100 hover:bg-orange-500 transition duration-300">
                <PiShoppingCartThin className="text-xl text-gray-800 hover:text-white transition duration-300" />
            </button>
        </div>
    )
}

export default IconButtons