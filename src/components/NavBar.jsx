import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import ResponsiveMenu from './ResponsiveMenu';
import { Button } from '@chakra-ui/react';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links = [
        { title: "Home", href: "/", tooltip: "Go to Home" },
        { title: "Restaurants", href: "/restaurants", tooltip: "View Restaurants" },
        { title: "Category", href: "/categories", tooltip: "Browse Categories" },
        { title: "My Orders", href: "/orders", tooltip: "See Your Orders" },
    ];
    return (
        <>
            <nav>
                <div className='p-10 flex justify-between items-center py-8 '>
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <IoFastFoodOutline className='text-orange-400' />
                        <p>FoodieGo</p>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        title={link.tooltip}
                                        className='inline-block py-1 px-3 text-gray-700 hover:text-red-500 '
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        {/* Search Button */}
                        <button className=''>
                            <CiSearch className='text-2xl text-gray-700 hover:bg-orange-500 rounded-full hover:p-1 duration-200' />
                        </button>

                        {/* Cart Button */}
                        <button className=''>
                            <PiShoppingCartThin className='text-2xl text-gray-700 hover:bg-orange-500 rounded-full hover:p-1 duration-200' />
                        </button>

                        {/* Login Button */}
                        <Button className='group text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-md px-6 py-2 duration-200 hidden md:block'>
                            Login
                        </Button>
                    </div>


                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-2xl hover:bg-orange-500 rounded-full hover:p-1 duration-200' />
                    </div>
                </div>
            </nav>

            <ResponsiveMenu open={open} links={links} />
        </>
    )
}

export default NavBar