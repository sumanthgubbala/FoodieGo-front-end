import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { useCart } from "./CartContext";
import axios from "axios";
import { addItemsToCart } from "../utils/apis";

const MenuItemCard = ({ items }) => {
    const { addToCart } = useCart();

    const handleAddToCart = async () => {
        const userIdStr = sessionStorage.getItem("userId");
        const userId = userIdStr ? parseInt(userIdStr) : 0;
        console.log("User ID from sessionStorage:", userId);
        if (!userId || isNaN(userId)) {
            alert("Please login to add items to cart.");
            return;
        }

        const cartItemDTO = {
            userId: userId,
            menuItemId: items.id,
            quantity: 1, // Always 1 on first add; later you can handle update/merge logic
        };

        try {
            const response = await addItemsToCart(cartItemDTO);
            addToCart(response);
            alert("Item added to cart successfully!");
        } catch (error) {
            console.error("Error saving to DB:", error.response?.data || error.message);
            alert("Failed to add item to cart. Please try again.");
        }
    };

    return (
        <div className="p-3 hover:border rounded-xl hover:border-primary cursor-pointer hover:bg-orange-50">
            <Image
                src={items.imgUrl}
                width={500}
                height={130}
                alt={items.name}
                className="h-[130px] rounded-xl object-cover"
            />
            <div className="mt-2">
                <h2 className="font-bold text-lg">{items.name}</h2>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <label className="text-orange-300 text-sm">{items.restaurantName}</label>
                        <h2 className="text-sm text-gray-400">{items.categoryName}</h2>
                    </div>
                    <div className="flex gap-2 p-2">
                        <h2 className="text-sm text-gray-500 line-through">
                            ₹ {items.price * 2}
                        </h2>
                        <h2 className="text-sm text-red-600 font-semibold">
                            ₹ {items.price}
                        </h2>
                    </div>
                </div>
                <div className="flex justify-between mt-3">
                    <span></span>
                    <Button
                        className="group text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-md px-6 py-2 duration-200 hidden md:block"
                        onClick={handleAddToCart}
                    >
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
