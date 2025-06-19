import { Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import GetCategory from '../utils/apis';
import { BsArrowRightCircle } from 'react-icons/bs';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectCategory] =useState("");
    const params = useSearchParams();
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await GetCategory();
            setCategories(data);
            setSelectCategory(params.get('category'))
        }
        fetchCategories();
    },[params])
    return (
        <div className='mt-4 px-10 relative '>
            <div className='flex gap-4 overflow-auto scrollbar-hide '>
                {categories.length > 0 ? (
                    categories.map((categorie, index) => (
                    <Link href={`?category=${categorie.id}&name=${encodeURIComponent(categorie.name)}`} key={index}
                    className='flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28
                    hover:border-orange-400 hover:bg-orange-50 cursor-pointer group'
                    >
                        <Image />
                        <h2 className='object-contain text-sm font-medium group-hover:text-primary'>{categorie.name}</h2>
                    </Link>
                ))
                ) :(
                    <p className='w-full items-center  text-primary font-medium text-center'>No categories found</p>
                )
                }
            </div>
            {/* {
                categories.length > 0 ? (<BsArrowRightCircle className='absolute -right-10 top-9 bg-primary rounded-full text-white h-8 w-8 cursor-pointer mr-7' onClick={() => ScrollRightHandler()} />)
                :(<></>)
            } */}
        </div>
    )
}

export default CategoryList