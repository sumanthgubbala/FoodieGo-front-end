import React from 'react'
import NavBar from '../components/NavBar'
import { Button } from '@chakra-ui/react'
import CategoryList from '../components/CategoryList'
import RestaurantList from '../components/RestaurantList'
import MenuItems from '../components/MenuItems'

const Home = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <CategoryList />
        <RestaurantList />
        <MenuItems />
        
    </div>
  )
}

export default Home