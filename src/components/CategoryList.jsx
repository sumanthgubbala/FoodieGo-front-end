import { Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import GetCategory from "../utils/apis";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectCategory] = useState("");
    const [searchParams] = useSearchParams();
    const [items, setItem] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await GetCategory();
            setCategories(data);
            setSelectCategory(searchParams.get("category"));

            const el = scrollRef.current;
            if (!el) return;

            const onWheel = (e) => {
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth",
                });
            };
            el.addEventListener("wheel", onWheel, { passive: false });
            return () => {
                el.removeEventListener("wheel", onWheel);
            };
        };
        fetchCategories();
    }, [searchParams]);
    const ScrollRightHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 150, // or adjust the value for your UI
                behavior: "smooth",
            });
        }
    };
    const ScrollLeftHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -150,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="mt-4 px-10 relative ">
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide scroll-smooth"
            >
                {categories.length > 0 ? (
                    categories.map((categorie, index) => (
                        <Link
                            to={`?category=${categorie.id}&name=${encodeURIComponent(
                                categorie.name
                            )}`}
                            key={index}
                            className={`flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28
                        hover:border-orange-400 hover:bg-orange-50 cursor-pointer group
                        ${selectedCategory == categorie.id &&
                                "text-primary border-orange-400 bg-orange-50 "
                                }
                            `}
                        >
                            <Image
                                src={categorie.imgUrl}
                                alt={`Image of ${categorie.name}`}
                                width={40}
                                height={40}
                            />
                            <h2 className="object-contain text-sm font-medium group-hover:text-primary">
                                {categorie.name}
                            </h2>
                        </Link>
                    ))
                ) : (
                    <p className="w-full items-center  text-primary font-medium text-center">
                        No categories found
                    </p>
                )}
            </div>
            {categories.length > 0 && (
                <>
                    <BsArrowLeftCircle
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-orange-500 rounded-full text-white h-8 w-8 cursor-pointer z-10"
                        onClick={ScrollLeftHandler}
                    />
                    <BsArrowRightCircle
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-orange-500 rounded-full text-white h-8 w-8 cursor-pointer z-10"
                        onClick={ScrollRightHandler}
                    />
                </>
            )}
        </div>
    );
};

export default CategoryList;
