import React, { useEffect, useState } from 'react'
import { GetMenuItems } from '../utils/apis';
import MenuItemCard from './MenuItemCard';

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response = await GetMenuItems();
            setMenuItems(response);
        }
        fetchMenuItems();
    }, [])
    return (
        <div className='mt-5 px-10'>
            <h2 className='font-bold text-2xl'>Popular Menu Items</h2>
            <div className='grid grid-cols-1 
                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        gap-7 mt-3
                        '>
                {menuItems.length > 0 ? (
                    menuItems.map((item, index) => (
                        <MenuItemCard items={item} />
                    ))
                ) : (<> </>)

                }
            </div>

        </div>
    )
}

export default MenuItems