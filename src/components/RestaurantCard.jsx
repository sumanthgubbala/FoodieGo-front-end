import { Image } from '@chakra-ui/react'
import React from 'react'

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='p-3 hover:border rounded-xl hover:border-primary cursor-pointer hover:bg-orange-50 '>
      <Image
        src={restaurant.imgUrl}
        width={500}
        height={130}
        alt={restaurant.name}
        className="h-[130px] rounded-xl object-cover "
      />
      <div className='mt-2'>
        <h2 className='font-semibold text-lg'>{restaurant.name}</h2>
        <div className='flex justify-between items-center'>
          <div>
            <p>🌟🌟🌟🌟</p>
            <label className='text-gray-400 text-sm'>4.5</label>
            <h2 className='text-sm text-gray-400'>{restaurant.status}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard