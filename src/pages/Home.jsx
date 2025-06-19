import React from 'react'
import NavBar from '../components/NavBar'
import { Button } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
        <div><NavBar/></div>
        <div className="p-4 m-4">Main content</div>
        <div className='p-4 m-4'>Login</div>
    </div>
  )
}

export default Home