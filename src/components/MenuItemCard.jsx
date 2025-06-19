import { Button, Image } from "@chakra-ui/react";
import React from "react";

const MenuItemCard = ({ items }) => {
    return (
        <div className="p-3 hover:border rounded-xl hover:border-primary cursor-pointer hover:bg-orange-50 ">
            <Image
                src={items.imgUrl}
                width={500}
                height={130}
                alt={items.name}
                className="h-[130px] rounded-xl object-cover "
            />
            <div className="mt-2">
                <h2 className="font-bold text-lg">{items.name}</h2>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <label className="text-orange-300 text-sm">
                            {items.restaurantName}
                        </label>
                        <h2 className="text-sm text-gray-400">{items.categoryName}</h2>
                    </div>
                    <div className="flex gap-2 p-2">
                        <h2 className="text-sm text-gray-500 line-through animate-strike 0.5s ease-in-out forwards">
                            ₹ {items.price * 2}
                        </h2>
                        <h2 className="text-sm text-red-600 font-semibold">
                            ₹ {items.price}
                        </h2>
                    </div>
                    
                </div>
                <div className="flex justify-between mt-3 ">
                    <span></span>
                    <Button className="group text-orange-500 border-2 border-orange-500
                        hover:bg-orange-500 hover:text-white font-semibold rounded-md px-6 py-2 duration-200 hidden md:block">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
