import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import ResponsiveMenu from './ResponsiveMenu';
import { Button } from '@chakra-ui/react';
import { AuthenticationHook } from './ContextAuthentication'; 
import { useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = AuthenticationHook(); // Context state
    const navigate = useNavigate();
    const links = [
        { title: "Home", href: "/home", tooltip: "Go to Home" },
        { title: "Restaurants", href: "/restaurants", tooltip: "View Restaurants" },
        { title: "My Orders", href: "/orders", tooltip: "See Your Orders" },
    ];

    const handleAuth = () => {
        if (isLoggedIn) {
            // Sign out logic
            setIsLoggedIn(false);
            sessionStorage.removeItem("isLoggedIn");
            navigate('/'); // Redirect if needed
        } else {
            // Navigate to login
            navigate('/');
        }
    };

    return (
        <>
            <nav>
                <div className='p-10 flex justify-between items-center py-8'>
                    {/* Logo */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <IoFastFoodOutline className='text-orange-400' />
                        <p>FoodieGo</p>
                    </div>

                    {/* Navigation Links */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        title={link.tooltip}
                                        className='inline-block py-1 px-3 text-gray-700 hover:text-red-500'
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Icons and Auth Button */}
                    <div className='flex items-center gap-4'>
                        {/* Search Button */}
                        <button>
                            <CiSearch className='text-2xl text-gray-700 hover:bg-orange-500 rounded-full hover:p-1 duration-200' />
                        </button>

                        {/* Cart Button */}
                        <button>
                            <PiShoppingCartThin className='text-2xl text-gray-700 hover:bg-orange-500 rounded-full hover:p-1 duration-200' onClick={()=>{navigate('/cart')}}/>
                        </button>

                        {/* Login/Logout Button */}
                        {/* <Button
                            onClick={handleAuth}
                            className='group text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-md px-6 py-2 duration-200 hidden md:block'
                        >
                            {isLoggedIn ? 'Sign Out' : 'Login'}
                        </Button> */}
                        <ProfileMenu />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-2xl hover:bg-orange-500 rounded-full hover:p-1 duration-200' />
                    </div>
                </div>
            </nav>
            {/* Responsive Menu Component */}
            <ResponsiveMenu open={open} links={links} />
        </>
    );
};

export default NavBar;
